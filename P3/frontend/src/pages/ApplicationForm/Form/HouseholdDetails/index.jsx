import HomeDropdown from "./HomeDropdown";
import TextArea from "../TextArea";
import '../../style.css';

function HouseholdDetails({tofill, fill}){
    
    return <>
        <h4 class="text-start mb-4">Household Details</h4>

        <div class="row mb-3">
            <label for="homeChoice" class="col-12 col-form-label text-start col-lg-2 text-lg-end"> Home Type</label>
            <div class="col-12 col-lg-10">
                <HomeDropdown tofill={tofill} fill={fill}/>
            </div>
        </div>

        <TextArea info = {{label: "Residents", placeholder: "List the names and ages of all permanent residents of your household."}} 
        required='false' valid = {{}} validCheck={() => {}} tofill={tofill} fill={fill} fieldName="residents"/>

    </>
}

export default HouseholdDetails;