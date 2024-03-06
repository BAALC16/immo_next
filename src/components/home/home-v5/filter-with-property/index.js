//import AdvanceFilterModal from "@/components/common/advance-filter";
import AdvanceFilterModal from '@/components/common/advance-filter-two'

import FilterContent from "./FilterContent";

const Hero = ({props}) => {

  console.log("MIMI",props);

  return (
    <>
      <div className="inner-banner-style1 text-center">
        <FilterContent propertyTypes={props?.propertyTypes} propertyCities={props?.propertyCities}/>
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal propertyTypes={props?.propertyTypes} propertyFeatures={props?.propertyFeatures} propertyCities={props?.propertyCities}/>
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
