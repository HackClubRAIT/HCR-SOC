// const axios = require('axios');
// axios.get('https://api.github.com/repos/HackClubRAIT/HackClubRAIT.github.io/pulls?state=closed')
// .then((response) => {
//     let allData=[]
//     const res=response.data;
//     if(res.length!=0){
//         const socData=filtersoc(res);
//         allData=[...allData,...socData]
//     }
//   })
//   .catch((error) => {
 
//    console.log(error)
//   })

// const filtersoc=(allData)=>{
//     const socData=allData.filter((prData)=>{
//         let isJwoc=false;
//         if (prData.merged_at) {
//             prData.labels.map((eachLabel) => {
//               if (eachLabel.name.toLowerCase().includes('JWOC'.toLowerCase())) {
//                 isJwoc = true;
//               }
//             });
//           }     
//     console.log(isJwoc)
//     });
//     if(socData.length!=0){
//         socData.map((prData) => {
//             const data = {
//               user_name: prData.user.login,
//               avatar_url: prData.user.avatar_url,
//               user_url: prData.user.html_url,
//               pr_url: prData.html_url,
//               labels: prData.labels.map((labelData) => labelData.name),
//               phase: getPhase(prData.created_at),
//             };
//             finalData = [...finalData, data];
//           });
//     }
//     return finalData;
// }