document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    function validateForm() {
        var form = document.getElementById("resumeform");
        if (!form.checkValidity) {
            alert("Please fill all required fields correctly");
            return false;
        }
        return true;
    }
    function generateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var education = document.getElementById("education").value;
        var skill = document.getElementById("skill").value;
        var experience = document.getElementById("experience").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        // populate resume //   
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displaySkills").innerText = skill;
        document.getElementById("displayExperience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displayPicture").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(picture);
        }
    }
    ;
    (_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            generateResume();
        }
    });
    // generateResume //
    (_b = document.getElementById("name")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", generateResume);
    (_c = document.getElementById("email")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", generateResume);
    (_d = document.getElementById("phone")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", generateResume);
    (_e = document.getElementById("address")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", generateResume);
    (_f = document.getElementById("education")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", generateResume);
    (_g = document.getElementById("skill")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", generateResume);
    (_h = document.getElementById("experience")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", generateResume);
    (_j = document.getElementById("picture")) === null || _j === void 0 ? void 0 : _j.addEventListener("input", generateResume);
    var workEducation = document.getElementById("workEducation");
    var workSkills = document.getElementById("workSkills");
    var workExperience = document.getElementById("workExperience");
    workEducation === null || workEducation === void 0 ? void 0 : workEducation.addEventListener("input", function (event) {
        var updateEducation = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateEducation);
    });
    workSkills === null || workSkills === void 0 ? void 0 : workSkills.addEventListener("input", function (event) {
        var updateSkills = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateSkills);
    });
    workExperience === null || workExperience === void 0 ? void 0 : workExperience.addEventListener("input", function (event) {
        var updateExperience = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateExperience);
    });
});
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
});
var downloadpdf = document.getElementById("downloadpdf");
downloadpdf === null || downloadpdf === void 0 ? void 0 : downloadpdf.addEventListener("click", function () {
    window.print();
});
