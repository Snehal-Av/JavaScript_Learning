console.log("--------Assignment on Object--------");
let teacher = {
    "fullName":"Snehal Avatade",
    "subject":"React js",
    "degree":"BE",
    "college":"Sinhgad College of engineering",
    degrees: {
        engineering:"CSC",
        PHD:"Adv Computing",
        Medical:"Md",
        MSC:"computer science",
        Details:function(){
            let TeacherDegrees=`Total degrees are: ${this.engineering}, ${this.PHD}, ${this.Medical}, ${this.MSC}`;
            return TeacherDegrees;
        }
    },
    certificate:{
        "HackerRankParticipation":"A grade",
        Certificate_in_IFE_Course:"B grade",
        CertificateInAdvProgramming:"A+ grade",
        CertificateInPosterPresentation:"A grade"
    },
    Details:function(){
        let TeacherDegrees=`Total degrees are: ${this.engineering}, ${this.PHD}, ${this.Medical}, ${this.MSC}`;
        return TeacherDegrees;
    },
    collegeDetails:{
        CollegeName:"Sinhgad College Of engineering",
        CollegeCity:"Pune",
        CollegeUniversity:"Savitribai Phule University",
        cDetails:function(){
            let colDetails=`college Details are: ${this.CollegeName}, ${this.CollegeCity}, ${this.CollegeUniversity} `;
            return colDetails;
        }
    }

}
let tDetails= teacher.degrees.Details();
console.log(tDetails);
let ccDetails=teacher.collegeDetails.cDetails();
console.log(ccDetails);
teacher.collegeDetails.CollegeUniversity="Savitribai Phule Pune University";
console.log(teacher.collegeDetails);
delete teacher.certificate.CertificateInAdvProgramming;
teacher.certificate.CertificateInCoreProgramming="B Grade";
console.log(teacher.certificate);
