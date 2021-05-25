window.addEventListener('load', () => {
    
    const serialNo = sessionStorage.getItem("SERIALNO");
    const name = sessionStorage.getItem('NAME');
    const fathername = sessionStorage.getItem("FATHERNAME");
    const mothername = sessionStorage.getItem("MOTHERNAME");
    const villname = sessionStorage.getItem("VILLNAME");
    const po = sessionStorage.getItem("PO");
    const thana = sessionStorage.getItem("THANA");
    const district = sessionStorage.getItem("DISTRICT");
    const dob = sessionStorage.getItem("DOB");
    const nid = sessionStorage.getItem("NID");
    const roll = sessionStorage.getItem("ROLL");
    const reg = sessionStorage.getItem("REG");
    const mobile = sessionStorage.getItem("MOBILE");
    const email = sessionStorage.getItem("EMAIL");
    const date = sessionStorage.getItem("DATE");
    
    document.getElementById("result-serialNo").innerHTML = serialNo;
    document.getElementById('result-name').innerHTML = name;
    document.getElementById("result-fathername").innerHTML = fathername;
    document.getElementById("result-mothername").innerHTML = mothername;
    document.getElementById("result-villname").innerHTML = villname;
    document.getElementById("result-po").innerHTML = po;
    document.getElementById("result-thana").innerHTML = thana;
    document.getElementById("result-district").innerHTML = district;
    document.getElementById("result-dob").innerHTML = dob;
    document.getElementById("result-nid").innerHTML = nid;
    document.getElementById("result-roll").innerHTML = roll;
    document.getElementById("result-reg").innerHTML = reg;
    document.getElementById("result-mobile").innerHTML = mobile;
    document.getElementById("result-email").innerHTML = email;
    document.getElementById("result-date").innerHTML = date;

})