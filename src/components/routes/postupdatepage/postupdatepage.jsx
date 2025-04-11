import "./postupdatepage.scss";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../uploadwidget/uploadWidget";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";
import { useLocation } from "react-router-dom";

export default function PostUpdatePage() {
  // prefilled data
  const { state } = useLocation();
  const postData = state?.postData; // Access the passed item
  console.log("Received post data:", postData);

  const [loadedData, setLoadedData] = useState(null);
  // Fetch the data when the component mounts or when postData.id changes
  useEffect(() => {
    if (!postData?.id) return;
    async function fetchData() {
      try {
        const responce = await apiRequest.get(`/post/${postData.id}`);
        setLoadedData(responce.data);
        console.log("Fetched data:", loadedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [postData?.id]);
  console.log("loaded data", loadedData);

  //end of prefilled data
  // const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //get the data from the postData and set the value of the form
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    description: "",
    city: "",
    bedroom: "",
    bathroom: "",
    latitude: "",
    longitude: "",
    type: "rent",
    property: "apartment",
    utilities: "owner",
    pet: "allowed",
    income: "",
    size: "",
    school: "",
    bus: "",
    restaurant: "",
  });

  // Keep only this useEffect for form initialization
  useEffect(() => {
    if (loadedData) {
      setFormData({
        title: loadedData.title || "",
        price: loadedData.price || "",
        address: loadedData.address || "",
        description: loadedData?.postDetail?.desc || "",
        city: loadedData.city || "",
        bedroom: loadedData.bedroom || "",
        bathroom: loadedData.bathroom || "",
        latitude: loadedData.latitude || "",
        longitude: loadedData.longitude || "",
        type: loadedData.type || "rent",
        property: loadedData.property || "apartment",
        utilities: loadedData?.postDetail?.utilities || "owner",
        pet: loadedData?.postDetail?.pet || "allowed",
        income: loadedData?.postDetail?.income || "",
        size: loadedData?.postDetail?.size || "",
        school: loadedData?.postDetail?.school || "",
        bus: loadedData?.postDetail?.bus || "",
        restaurant: loadedData?.postDetail?.restaurant || "",
      });
      setImages(loadedData.images || []); // For images
    }
  }, [loadedData]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    const confirmLogout = window.confirm(
      "Are you sure you want to update the property"
    );
    e.preventDefault();
    setError(""); // Clear previous errors

    // --- Manually construct the nested structure ---
    const postDataToSend = {
      title: formData.title,
      // Use parseInt like in create, provide fallback (e.g., 0) if NaN
      price: parseInt(formData.price) || 0,
      address: formData.address,
      city: formData.city,
      bedroom: parseInt(formData.bedroom) || 0,
      bathroom: parseInt(formData.bathroom) || 0,
      type: formData.type,
      property: formData.property,
      latitude: formData.latitude,
      longitude: formData.longitude,
      images: images, // Use the current images state
    };

    const postDetailToSend = {
      // Description comes from formData now, not separate 'value' state
      desc: formData.description,
      utilities: formData.utilities,
      pet: formData.pet,
      income: formData.income,
      size: parseInt(formData.size) || 0,
      school: parseInt(formData.school) || 0,
      bus: parseInt(formData.bus) || 0,
      restaurant: parseInt(formData.restaurant) || 0,
    };

    // Combine into the final payload object with the desired structure
    const finalPayload = {
      postData: postDataToSend,
      postDetail: postDetailToSend,
    };

    console.log("Data structure to be sent to the server:", finalPayload);
    // ------------------------------------------------

    try {
      // *** IMPORTANT: Use PUT or PATCH for updates, and include the ID ***
      const res = await apiRequest.put(`/post/${postData.id}`, finalPayload);
      console.log(res.data);
      // Navigate after successful update, perhaps back to the post page
      navigate("/" + postData.id); // Or navigate where appropriate
    } catch (err) {
      console.error("Error updating post:", err);
      setError(err.response?.data?.message || "Failed to update post."); // Set a meaningful error
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Update Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                min={0}
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              {/* <ReactQuill theme="snow" onChange={setValue} value={value} /> */}
              <div className="editorContainer">
                <ReactQuill
                  theme="snow"
                  value={formData.description}
                  onChange={(content) =>
                    setFormData((prev) => ({ ...prev, description: content }))
                  }
                />
              </div>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                value={formData.bedroom}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                value={formData.bathroom}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                value={formData.latitude}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                value={formData.longitude}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select
                name="property"
                id="property"
                value={formData.property}
                onChange={handleChange}
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select
                name="utilities"
                id="utilities"
                value={formData.utilities}
                onChange={handleChange}
              >
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select
                name="pet"
                id="pet"
                value={formData.pet}
                onChange={handleChange}
              >
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
                value={formData.income}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                min={0}
                id="size"
                name="size"
                type="number"
                value={formData.size}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input
                min={0}
                id="school"
                name="school"
                type="number"
                value={formData.school}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input
                min={0}
                id="bus"
                name="bus"
                type="number"
                value={formData.bus}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                value={formData.restaurant}
                onChange={handleChange}
              />
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
      </div>
    </div>
  );
}
