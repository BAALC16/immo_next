const ScheduleForm = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb15">
            <input
              type="text"
              className="form-control"
              placeholder="Nom"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="mb15">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-12">
          <div className="mb15">
            <input
              type="text"
              className="form-control"
              placeholder="Téléphone"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="mb15">
            <textarea
              cols={30}
              rows={4}
              placeholder="Hello, Je suis interessé par cette propriété"
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
          <label className="custom_checkbox fz14 ff-heading">
            En soumettant le formulaire, j’accepte les conditions d’utilisation
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              Valider
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default ScheduleForm;
