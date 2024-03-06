'use client'

const Amenities = ({filterFunctions, propertyFeatures}) => {

    const amenities = [];
    let nbre;
    let nbreF = 0;
    let i = 1;
    let j = 1;
    let k = 1;
    let col1 = [];
    let col2 = [];
    let col3 = [];

    if((propertyFeatures?.length % 3 ) == 0){
        nbre = propertyFeatures?.length / 3;
    }else{
        nbre = (propertyFeatures?.length - (propertyFeatures?.length % 3)) / 3;
        nbreF = nbre + propertyFeatures?.length % 3;
    }

    propertyFeatures?.forEach(element => {
        let label = element.name;
        let nbreTest;
        if( i <= nbre){
            col1.push({label: label});
        }

        if(i > nbre && j <= nbre ){
            col2.push({label: label});
            j++;
        }
        
        nbreTest = j - 1;

        if(nbreTest == nbre){
            j++;
        }

        if(nbreTest != nbre && i > nbre && j > nbre && k <= nbreF){
            col3.push({label: label});
            j++;
            k++;
        }
        
        i++;

        
    });
    
    amenities.push(col1);
    amenities.push(col2);
    amenities.push(col3);

 /*  const amenities = [
    [
      { label: "Attic" },
    { label: "Basketball court", defaultChecked: true },
    { label: "Air Conditioning", defaultChecked: true },
    { label: "Lawn", defaultChecked: true },
    ],
    [
      { label: "TV Cable" },
      { label: "Dryer" },
      { label: "Outdoor Shower" },
    { label: "Washer" },
    ],
    [
      { label: "Lake view" },
      { label: "Wine cellar" },
      { label: "Front yard" },
      { label: "Refrigerator" },
    ],
  ]; */

  return (
    <>
      {amenities.map((column, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              {column.map((amenity, amenityIndex) => (
                <label className="custom_checkbox" key={amenityIndex}>
                  {amenity.label}
                  <input
                  checked={filterFunctions?.categories.includes(amenity.label)}
                  onChange={()=>filterFunctions?.handlecategories(amenity.label)}
                    type="checkbox"

                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
