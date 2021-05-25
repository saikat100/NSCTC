function handleSubmit () {
	const serialNo = document.getElementById("serialNo").value;
	const name = document.getElementById("name").value;
	const fathername = document.getElementById("fathername").value;
    const mothername = document.getElementById("mothername").value;
    const villname = document.getElementById("villname").value;
	const po = document.getElementById("po").value;
	const thana = document.getElementById("thana").value;
	const district = document.getElementById("district").value;
	const dob = document.getElementById("dob").value;
	const nid = document.getElementById("nid").value;
	const roll = document.getElementById("roll").value;
	const reg = document.getElementById("reg").value;
	const mobile = document.getElementById("mobile").value;
	const email = document.getElementById("email").value;
	const date = document.getElementById("date").value;



	sessionStorage.setItem("SERIALNO", serialNo);
	sessionStorage.setItem("NAME", name);
	sessionStorage.setItem("FATHERNAME", fathername);
    sessionStorage.setItem("MOTHERNAME", mothername);
    sessionStorage.setItem("VILLNAME", villname);
	sessionStorage.setItem("PO", po);
	sessionStorage.setItem("THANA", thana);
	sessionStorage.setItem("DISTRICT", district);
	sessionStorage.setItem("DOB", dob);
	sessionStorage.setItem("NID", nid);
	sessionStorage.setItem("ROLL", roll);
	sessionStorage.setItem("REG", reg);
	sessionStorage.setItem("MOBILE", mobile);
	sessionStorage.setItem("EMAIL", email);
	sessionStorage.setItem("DATE", date);

	return;
}