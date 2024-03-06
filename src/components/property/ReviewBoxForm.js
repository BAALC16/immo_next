"use client";
import Select from "react-select";

const ReviewBoxForm = () => {
  const inqueryType = [
    { value: "Cinq étoiles", label: "Cinq étoiles" },
    { value: "Quatre étoiles", label: "Quatre étoiles" },
    { value: "Trois étoiles", label: "Trois étoiles" },
    { value: "Deux étoiles", label: "Deux étoiles" },
    { value: "Une étoile", label: "Une étoile" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Additional logic or API calls can be added here
  };

  return (
    <form className="comments_form mt30" onSubmit={handleSubmit}>
      <div className="row">
       {/*  <div className="col-md-12">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="ibthemes21@gmail.com"
              required
            />
          </div>
        </div> */}
        {/* End .col-12 */}

        {/* <div className="col-md-6">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Avis</label>
            <input
              type="text"
              className="form-control"
              placeholder="Entrer votre avis"
              required
            />
          </div>
        </div> */}
        {/* End .col-6 */}

        <div className="col-md-12">
          <div className="widget-wrapper sideborder-dropdown mb-4">
            <label className="fw600 ff-heading mb-2">Note</label>
            <div className="form-style2 input-group">
              <Select
                defaultValue={[inqueryType[0]]}
                name="colors"
                options={inqueryType}
                styles={customStyles}
                className="custom-react_select"
                classNamePrefix="select"
                required
                isClearable={false}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-md-12">
          <div className="mb-4">
            <label className="fw600 ff-heading mb-2">Avis</label>
            <textarea
              className="pt15"
              rows={6}
              placeholder="Entrer votre avis"
              defaultValue={""}
              required
            />
          </div>
          <button type="submit" className="ud-btn btn-white2">
            Valider
            <i className="fal fa-arrow-right-long" />
          </button>
        </div>
        {/* End .col-6 */}
      </div>
    </form>
  );
};

export default ReviewBoxForm;
