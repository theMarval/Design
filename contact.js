

let region = document.querySelector("#region")
let state = document.querySelector("#state")
let city = document.querySelector("#city")
region.addEventListener('change', () => {
    if (region.value == "") {
        console.log('serewmk')
    }
    else if (region.value == "India") {
        state.innerHTML =
            `
    <option hidden>state</option>
    <option> Andaman and Nicobar Islands </option>
    <option> Andhra Pradesh </option>
    <option> Arunachal Pradesh </option>
    <option> Assam </option>
    <option> Bihar </option>
    <option> Chandigarh </option>
    <option> Chhattisgarh </option>
    <option> Dadra and Nagar Haveli and Daman and Diu </option>
    <option> Delhi </option>
    <option> Goa </option>
    <option> Gujarat </option>
    <option> Haryana </option>
    <option> Himachal Pradesh </option>
    <option> Jammu and Kashmir </option>
    <option> Jharkhand </option>
    <option> Karnataka </option>
    <option> Kerala </option>
    <option> Ladakh </option>
    <option> Lakshadweep </option>
    <option> Madhya Pradesh </option>
    <option> Maharashtra </option>
    <option> Manipur </option>
    <option> Meghalaya </option>
    <option> Mizoram </option>
    <option> Nagaland </option>
    <option> Odisha </option>
    <option> Puducherry </option>
    <option> Punjab </option>
    <option> Rajasthan </option>
    <option> Sikkim </option>
    <option> Tamil Nadu </option>
    <option> Telangana </option>
    <option> Tripura </option>
    <option> Union territory </option>
    <option> Uttar Pradesh </option>
    <option> Uttarakhand </option>
    <option> West Bengal  </option>
            `
    }
    else if (region.value == "America"){
        state.innerHTML =
        `<option hidden>state</option>
<option>        Alabama</option>
<option>Alaska</option>
<option>Arizona</option>
<option>Arkansas</option>
<option>California</option>
<option>Colorado</option>
<option>Connecticut</option>
<option>Delaware</option>
<option>Florida</option>
<option>Georgia</option>
<option>Hawaii</option>
<option>Idaho</option>
<option>Illinois</option>
<option>Indiana</option>
<option>Iowa</option>
<option>Kansas</option>
<option>Kentucky</option>
<option>Louisiana</option>
<option>Maine</option>
<option>Maryland</option>
<option>Massachusetts</option>
<option>Michigan</option>
<option>Minnesota</option>
<option>Mississippi</option>
<option>Missouri</option>
<option>Montana</option>
<option>Nebraska</option>
<option>Nevada</option>
<option>New Hampshire</option>
<option>New Jersey</option>
<option>New Mexico</option>
<option>New York</option>
<option>North Carolina</option>
<option>North Dakota</option>
<option>Ohio</option>
<option>Oklahoma</option>
<option>Oregon</option>
<option>Pennsylvania</option>
<option>Rhode Island</option>
<option>South Carolina</option>
<option>South Dakota</option>
<option>Tennessee</option>
<option>Texas</option>
<option>Utah</option>
<option>Vermont</option>
<option>Virginia</option>
<option>Washington</option>
<option>West Virginia</option>
<option>Wisconsin</option>
<option>Wyoming</option>
        `
    }
    if (region.value == "Japan"){
        state.innerHTML =
        `<option hidden>state</option>`
    }
    if (region == "Nepal"){
        state.innerHTML =
        `<option hidden>state</option>`
    }
})
