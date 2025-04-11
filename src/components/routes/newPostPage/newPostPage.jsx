import { useEffect, useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../uploadwidget/uploadWidget";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";

function NewPostPage() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  //process co-ordinates
  const [location, setLocation] = useState(null);
  const [errorr, setErrorr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. logic for coordinate
  const getLocation = () => {
    setIsLoading(true);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy, // in meters
        });
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true, // Request best possible accuracy
        timeout: 10000, // 10 seconds
        maximumAge: 0, // Don't use cached position
      }
    );
  };

  // State to store the fetched address details
  const [addressDetails, setAddressDetails] = useState({
    city: "N/A",
    road: "N/A",
    address: "N/A",
    estate: "N/A",
  });

  //2.  reverse geoCode to get the name of city and address
  useEffect(() => {
    if (!location) return; // Ensure location is available before proceeding
    const getCityAndAddress = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`
        );
        const data = await response.json();
        console.log(data);
        const city = data.address?.city || "N/A";
        const road = data.address?.road || "N/A";
        const address = data.display_name || "N/A";
        const estate = data.address?.suburb || "N/A";
        setAddressDetails({ city, road, address, estate });
        // return { city, address };
      } catch (error) {
        console.error("Error fetching city and address:", error);
        return { city: "", address: "" };
      }
    };
    getCityAndAddress(location?.latitude, location?.longitude);
  }, [location]);

  //3. get name of schools and restaurants near my position
  const [nearbyPlaces, setNearbyPlaces] = useState({
    schools: [],
    restaurants: [],
  });
  console.log(
    "school name: ",
    nearbyPlaces.schools.length > 0
      ? nearbyPlaces.schools[0].name
      : "No schools nearby yet"
  );
  console.log(
    "restaurant name: ",
    nearbyPlaces.restaurants.length > 0
      ? nearbyPlaces.restaurants[0].name
      : "No restaurants nearby yet"
  );
  const [loadingPlaces, setLoadingPlaces] = useState(false);

  // Add distance calculation function
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  const processPlaces = (data) => {
    return data.elements.map((place) => ({
      id: place.id,
      name: place.tags?.name || "Unnamed",
      lat: place.lat,
      lon: place.lon,
      distance: calculateDistance(
        location.latitude,
        location.longitude,
        place.lat,
        place.lon
      ),
    }));
  };

  const fetchNearbyPlaces = async (lat, lon, radius = 1000) => {
    setLoadingPlaces(true);

    try {
      const query = `[out:json];
          (
              node["amenity"="school"](around:${radius},${lat},${lon});
              node["amenity"="restaurant"](around:${radius},${lat},${lon});
          );
          out;`;

      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `data=${encodeURIComponent(query)}`,
      });

      const data = await response.json();

      const schools = data.elements.filter(
        (el) => el.tags?.amenity === "school"
      );
      const restaurants = data.elements.filter(
        (el) => el.tags?.amenity === "restaurant"
      );

      setNearbyPlaces({
        schools: processPlaces({ elements: schools }),
        restaurants: processPlaces({ elements: restaurants }),
      });
    } catch (error) {
      console.error("Error fetching nearby places:", error);
    } finally {
      setLoadingPlaces(false);
    }
  };

  // Add useEffect to trigger fetchNearbyPlaces
  useEffect(() => {
    if (!location) return;
    console.log("Fetching nearby places for location:", location);
    fetchNearbyPlaces(location.latitude, location.longitude, 1000);
  }, [location]);

  //4 submitting the form to create property
  const handleSubmit = async (e) => {
    const confirmLogout = window.confirm(
      "Are you sure you want to create a property"
    );
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    console.log("Form Inputs:", inputs); // ✅ Log raw inputs
    console.log("Images:", images);

    try {
      const res = await apiRequest.post("/post", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });

      navigate("/" + res.data.id); //this means we are navigating to that specific post id
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  // automatic population of field
  // Add this useEffect hook near your other useEffect hooks
  useEffect(() => {
    if (location) {
      // Get the input elements
      const latitudeInput = document.getElementById("latitude");
      const longitudeInput = document.getElementById("longitude");

      // Set their values
      if (latitudeInput) latitudeInput.value = location.latitude;
      if (longitudeInput) longitudeInput.value = location.longitude;

      // Also auto-fill the address and city
      const addressInput = document.getElementById("address");
      const cityInput = document.getElementById("city");

      if (addressInput && addressDetails.address !== "N/A") {
        addressInput.value = addressDetails.address;
      }
      if (cityInput && addressDetails.city !== "N/A") {
        cityInput.value = addressDetails.city;
      }

      //autofill for distance
      const schoolInput = document.getElementById("school");
      const restaurantInput = document.getElementById("restaurant");
      if (schoolInput && nearbyPlaces.schools.length > 0) {
        schoolInput.value = nearbyPlaces.schools[0].distance.toFixed(3) * 1000;
      }

      if (restaurantInput && nearbyPlaces.restaurants.length > 0) {
        restaurantInput.value =
          nearbyPlaces.restaurants[0].distance.toFixed(3) * 1000;
      }
    }
  }, [location, addressDetails]);

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              {/* <ReactQuill theme="snow" onChange={setValue} value={value} /> */}
              <div className="editorContainer">
                <ReactQuill theme="snow" onChange={setValue} />
              </div>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (m²)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus stage</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Add</button>
            {error && <span>{error.message}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}

        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "dxxdvid9d",
            uploadPreset: "rent-right",
            folder: "posts",
          }}
          setState={setImages}
        />
        <div className="geolocation">
          <h2>Get My Location</h2>
          <button onClick={getLocation} disabled={isLoading}>
            {isLoading ? "Locating..." : "Get My Location"}
          </button>

          {errorr && <p style={{ color: "red" }}>Error: {errorr}</p>}

          {location && (
            <div className="locationDataDetails">
              <h3>Geoposition:</h3>
              <p>Latitude: {location.latitude}</p>
              <p>Longitude: {location.longitude}</p>
              <p>Accuracy: ±{location.accuracy} meters</p>
              <hr />

              <h3>Address:</h3>
              <p>City: {addressDetails.city}</p>
              <p>Road: {addressDetails.road}</p>
              <p>Address (Detailed): {addressDetails.address}</p>
              <p>Estate/Suburb: {addressDetails.estate}</p>
              <hr />
              <h3>Nearby School:</h3>

              {nearbyPlaces.schools.length > 0 ? (
                <>
                  <p>Name: {nearbyPlaces.schools[0].name}</p>
                  <p>
                    Distance:{" "}
                    {nearbyPlaces.schools[0].distance.toFixed(3) * 1000} m
                  </p>
                </>
              ) : (
                <p>No schools found nearby.</p>
              )}
              <hr />
              <h3>Nearby Restaurant:</h3>
              {nearbyPlaces.restaurants.length > 0 ? (
                <>
                  <p>Name: {nearbyPlaces.restaurants[0].name}</p>
                  <p>
                    Distance:{" "}
                    {nearbyPlaces.restaurants[0].distance.toFixed(3) * 1000}m
                  </p>
                </>
              ) : (
                <p>No restaurants found nearby.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
