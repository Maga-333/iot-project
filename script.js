document.addEventListener("DOMContentLoaded", function() {
    // Reset checkboxes or radio buttons on page load
    document.querySelectorAll('input[name="disease"]').forEach(input => input.checked = false);
    document.getElementById('otherDiseases').value = ''; // Reset dropdown
});

// Event listener for form change
document.getElementById('diseaseForm').addEventListener('change', function(event) {
    const selectedDisease = event.target.value;
    const diseaseInfoDiv = document.getElementById('diseaseInfo');
    diseaseInfoDiv.innerHTML = ''; // Clear previous information

    if (selectedDisease) {
        const info = getDiseaseInfo(selectedDisease);
        const diseaseDiv = document.createElement('div');
        diseaseDiv.innerHTML = `<h2>${info.name}</h2>
                                <p><strong>Causes:</strong> ${info.causes}</p>
                                <p><strong>Prevention:</strong> ${info.prevention}</p>
                                <p><strong>Solutions:</strong> ${info.solutions}</p>
                                <div class="medicine-list">
                                    <h3>Medicines:</h3>
                                    ${info.medicines.map(med => `<div class="medicine-item">
                                                                    <p><strong>${med.name}</strong></p>
                                                                    <p>Price: ${med.price}</p>
                                                                </div>`).join('')}
                                </div>
                                <div class="siddha-list">
                                    <h3>Siddha Medicines:</h3>
                                    ${info.siddha.map(sid => `<div class="siddha-item">
                                                                    <p><strong>${sid.name}</strong></p>
                                                                    
                                                                    <p>Link: <a href="${sid.link}" target="_blank">More Info</a></p>
                                                                </div>`).join('')}
                                </div>
                                <div class="devices-list">
                                    <h3>Devices and Apps:</h3>
                                    ${info.devices.map(dev => `<div class="device-item">
                                                                    <p><strong>${dev.name}</strong></p>
                                                                    <p>Price: ${dev.price}</p>
                                                                    <p>Link: <a href="${dev.link}" target="_blank">More Info</a></p>
                                                                </div>`).join('')}
                                </div>`;
        diseaseInfoDiv.appendChild(diseaseDiv);
    }
});

function getDiseaseInfo(disease) {
    const diseaseData = {
        cold: {
            name: 'Cold',
            causes: 'Caused by viruses such as rhinoviruses.',
            prevention: 'Wash hands regularly, avoid close contact with sick individuals.',
            solutions: 'Rest, stay hydrated, over-the-counter cold remedies.',
            medicines: [
                { name: 'Nimphrine Cold Tablet', price: '₹50' },
                { name: 'Cp-Cold Tablet', price: '₹30' }
            ],
            siddha: [
                { name: 'Thulasi', link: 'https://en.wikipedia.org/wiki/Ocimum_tenuiflorum' }
                
            ],
            devices: [
                { name: 'Air Purifier Device', price: '₹1199', link: 'https://www.amazon.in/Rosekm-Purifier-Bedroom-Personal-Fresheners/dp/B09WQDGZPB/ref=asc_df_B09WQDGZPB/?tag=googleshopdes-21&linkCode=df0&hvadid=709856187078&hvpos=&hvnetw=g&hvrand=357278577370766795&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007810&hvtargid=pla-1662189450191&mcid=7055d032ab0d386bbc2de243263f0703&gad_source=1&th=1' },
                { name: 'Cold Relief App', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        },
        fever: {
            name: 'Fever',
            causes: 'Often a symptom of an underlying infection.',
            prevention: 'Maintain good hygiene, get vaccinated.',
            solutions: 'Rest, hydration, antipyretic medications.',
            medicines: [
                { name: 'Paracetamol Tablet', price: '₹20' },
                { name: 'Ibuprofen Tablet', price: '₹25' }
            ],
            siddha: [
                { name: 'Nilavembu Kudineer', link: 'https://en.wikipedia.org/wiki/Andrographis_paniculata' }
            ],
            devices: [
                { name: 'Smart Thermometer', price: '₹1799', link: 'https://www.amazon.in/Beurer-Infrared-Functional-Thermometer-79518/dp/B00ABZ322W/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9._2hOMNbC2WVLAsbAYTC-Ud8Z0fS3BlfngNK8e8eZnb0Q2PudxCNQLqyGYUYxq6OGY5XzPqjbhCS4b6y5Dyjc1FRJh3ywcTKHWew1FxFEd88v2Xk9nUgrxg5bDT0X2NK1_4CUW8jyyP6Jsgad6bW75rhuk8yv6XjjczIBvkCRSWHLONDlBmD3VRNrbvoykgEnn1TrZJ3CrcmBSht_egYMFGYd_oylnkvuMn4ozywGygfvw9H5947PNE0fqY7GTfIR_5D0RbaTKjVp5TCI-nmLMqQbc0VqcIjHYBM6K9hxONU.OYidLeHvojgDsW1ryiNcx4Ikl9JRZrsB4HJ-L4bXcRE&dib_tag=se&keywords=smart+thermometer&qid=1739002129&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1' },
                { name: 'Fever Monitor App', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        },
        headaches: {
            name: 'Headaches',
            causes: 'Stress, dehydration, certain foods, underlying conditions.',
            prevention: 'Manage stress, stay hydrated, avoid known triggers.',
            solutions: 'Rest, hydration, over-the-counter pain relievers.',
            medicines: [
                { name: 'Aspirin Tablet', price: '₹15' },
                { name: 'Acetaminophen Tablet', price: '₹20' }
            ],
            siddha: [
                { name: 'Pudhina Tea', link: 'https://en.wikipedia.org/wiki/Mentha' }
            ],
            devices: [
                { name: 'Acupressure Massage Device', price: '₹299', link: 'https://www.amazon.in/ACP-ACUPRESSURE-Massagers-Relaxation-Stimulation/dp/B0CVMRVKXP' },
                { name: 'Migraine Relief App', price: 'Free', linnk:'https://play.google.com/store/apps/' }
            ]
        },
        allergies: {
            name: 'Allergies',
            causes: 'Immune system reaction to allergens like pollen, dust, certain foods.',
            prevention: 'Avoid known allergens, use air purifiers.',
            solutions: 'Antihistamines, nasal sprays, allergy shots.',
            medicines: [
                { name: 'Cetirizine Tablet', price: '₹10' },
                { name: 'Loratadine Tablet', price: '₹12' }
            ],
            siddha: [
                {name: 'Nilavembu Kudineer', link: 'https://en.wikipedia.org/wiki/Andrographis_paniculata' }
            ],
            devices: [
                { name: 'Air Purifier Device', price: '₹3499', link: 'https://www.amazon.in/atovio-Wearable-Portable-Purifier-Pollutants-PM0-01/dp/B0DNMMZR2Q/ref=asc_df_B0DNMMZR2Q/?tag=googleshopdes-21&linkCode=df0&hvadid=709856187078&hvpos=&hvnetw=g&hvrand=1935482745677523282&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007810&hvtargid=pla-2379538686627&mcid=b5e045b5e6c43d058f5be6ff742a894b&gad_source=1&th=1' },
                { name: 'Allergy Relief App', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        },
        diabetes: {
            name: 'Diabetes',
            causes: 'Body\'s inability to produce or use insulin effectively.',
            prevention: 'Maintain a healthy diet, regular exercise, regular medical check-ups.',
            solutions: 'Blood sugar monitoring, insulin therapy, medications.',
            medicines: [
                { name: 'Metformin Tablet', price: '₹25' },
                { name: 'Glimepiride Tablet', price: '₹30' }
            ],
            siddha: [
                { name: 'Seenthil', link: 'https://en.wikipedia.org/wiki/Tinospora_cordifolia' }
            ],
            devices: [
                { name: 'Glucometer', price: '₹875', link: 'https://www.amazon.in/OneTouch-Select-Simple-Glucometer-Strips/dp/B07M7NN54C/ref=sr_1_3_sspa?adgrpid=58089593519&dib=eyJ2IjoiMSJ9.hWGgAWoX6rWDuYJh32AoEjLCSGRfbWV3st1X-Uf7Jpmrc5HoEbbflZjztD1rh-x46RSFZA38G9ibFSFenMM2AVyVpmsXJaH--Yluakrc4HyuMhRD4sKbZYCbOlz3GDnoEErI5DuCSh7iYDEx-FTNj0zEyXxSANaZ4laO55CajU8eXxo6NTMvP50Lzd89vduvFtk7yrBtNo_tMou3w8EgoT26jWKJqL7WE_ZLM6moAaYVaSgKT9cAOa0D5mUU0iv9Z_vzlieG9k-IF5DAmSrJQcQlgDChi4iXOyVQ0aQ2SLA.NQI6gy5SfBOoz7SiOiJbzWllVh6nCrfUvDEbBkxerwo&dib_tag=se&ext_vrnc=hi&hvadid=590593736811&hvdev=c&hvlocphy=1007810&hvnetw=g&hvqmt=e&hvrand=17178002897682601014&hvtargid=kwd-328742961836&hydadcr=24566_2265454&keywords=amazon+glucometer&mcid=1ebb8effdbd73c7db0e66f8648e9a8c5&nsdOptOutParam=true&qid=1739002634&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1' },
                { name: 'Diabetes Tracker App', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        },
        asthma: {
            name: 'Asthma',
            causes: 'Inflammation and narrowing of the airways, often triggered by allergens or exercise.',
            prevention: 'Avoid known triggers, use preventive inhalers.',
            solutions: 'Inhalers, medications, breathing exercises.',
            medicines: [
                { name: 'Salbutamol Inhaler', price: '₹150' },
                { name: 'Budesonide Inhaler', price: '₹200' }
            ],
            siddha: [
                { name: 'Adhatoda zeylanica', link: 'https://en.wikipedia.org/wiki/Justicia_adhatoda' }
            ],
            devices: [
                { name: 'Portable Inhaler Device', price: '₹2499', link: 'https://www.amazon.in/Dr-Trust-Portable-Ultrasonic-Nebulizer/dp/B07FPDGXSN/ref=asc_df_B07FPDGXSN/?tag=googleshopdes-21&linkCode=df0&hvadid=709855985430&hvpos=&hvnetw=g&hvrand=9037627994347706902&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007810&hvtargid=pla-775366096011&psc=1&mcid=099f3efe2885334cba2a080bfffad7cb&gad_source=1' },
                { name: 'Asthma Management App', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        },
        hiv: {
            name: 'HIV',
            causes: 'Human Immunodeficiency Virus, transmitted through bodily fluids.',
            prevention: 'Safe sex, use of antiretroviral medications.',
            solutions: 'Antiretroviral therapy (ART), lifestyle management.',
            medicines: [
                { name: 'Abacavir Tablet', price: '₹500' },
                { name: 'Tenofovir Tablet', price: '₹450' }
            ],
            siddha: [
                { name: 'Aloe Vera', link: 'https://en.wikipedia.org/wiki/Aloe' }
            ],
            devices: [
                { name: 'HIV Test Kit', price: '₹330-₹1500', link: 'https://www.amazon.in/hiv-test-kit/s?k=hiv+test+kit' },
                { name: 'HIV Tracker App', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        },
        hypertension: {
            name: 'Hypertension',
            causes: 'High blood pressure caused by genetics, stress, or poor lifestyle choices.',
            prevention: 'Maintain a healthy weight, reduce stress, limit alcohol and salt intake.',
            solutions: 'Medications, lifestyle changes like exercise and diet.',
            medicines: [
                { name: 'Amlodipine Tablet', price: '₹40' },
                { name: 'Losartan Tablet', price: '₹50' }
            ],
            siddha: [
                { name: 'Cumin', link: 'https://en.wikipedia.org/wiki/Cumin' }
            ],
            devices: [
                { name: 'Blood Pressure Monitor', price: '₹200-₹2800', link: 'https://www.amazon.in/Blood-Pressure-Monitors/b?ie=UTF8&node=3150031031' },
                { name: 'BP Tracker App', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        },
        heart_disease: {
            name: 'Heart Disease',
            causes: 'High blood pressure, high cholesterol, smoking, unhealthy diet, and lack of physical activity.',
            prevention: 'Maintain a healthy weight, eat a balanced diet, exercise regularly, avoid smoking, limit alcohol consumption.',
            solutions: 'Medications, lifestyle changes, surgery (in severe cases), or angioplasty (for blocked arteries).',
            medicines: [
                { name: 'Atorvastatin', price: '₹300' },
                { name: 'Aspirin', price: '₹50' }
            ],
            siddha: [
                { name: 'Aloe Vera', link: 'https://en.wikipedia.org/wiki/Aloe' }
            ],
            devices: [
                { name: 'Heart Rate Monitor (Fitbit Charge 5)', price: '₹31847', link: 'https://www.amazon.in/Advanced-Management-Tracking-Graphite-Included/dp/B09BXQ4HMB' },
                { name: 'Heart Disease Management App (Free)', price: 'Free', link: 'https://play.google.com/store/apps/' }
            ]
        },
        cancer: {
            name: 'Cancer',
            causes: 'Smoking, unhealthy diet, radiation, genetics, and infections can cause cancer.',
            prevention: 'Avoid tobacco, eat healthy, exercise, and get regular check-ups to prevent cancer.',
            solutions: 'Cancer can be treated with surgery, chemotherapy, radiation, and immunotherapy.',
            medicines: [
                { name: "Epirubicin Injection", price: "₹960" },
                { name: "Erlotinib Tablet", price: "₹2400" }
            ],
            siddha: [
                { name: 'Coleus aromaticus', link: 'https://en.wikipedia.org/wiki/Coleus_amboinicus' }
            ],
            devices: [
                { name: 'Cancer Information', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        },
        brain_tumor: {
            name: 'Brain Tumor',
            causes: 'Genetics, radiation exposure, and abnormal cell growth cause brain tumors.',
            prevention: 'Avoid radiation exposure, maintain a healthy lifestyle, and go for regular check-ups.',
            solutions: 'Surgery, radiation therapy, chemotherapy, and targeted drug therapy.',
            medicines: [
                { name: "Temozolomide", price: "₹5000" },
                { name: "Bevacizumab", price: "₹25000" }
            ],
            siddha: [
                { name: "Brahmi Powder", link: "https://en.wikipedia.org/wiki/Bacopa_monnieri" }
            ],
            devices: [
                { name: "Headspace", price: "free", link: "https://play.google.com/store/apps/" }
            ]
        },
        hand_bone_fracture: {
            name: 'Hand Bone Fracture',
            causes: "Falls, accidents, or sports injuries can cause hand bone fractures.",
            prevention: "Wear protective gear, avoid falls, and maintain bone strength with calcium-rich foods.",
            solutions: "Casting, splinting, surgery, and physiotherapy.",
            medicines: [
                { name: "Calcium Supplements", price: "₹300" },
                { name: "Pain Relievers", price: "₹50" }
            ],
            siddha: [
                { name: "Murungai Leaf Powder", link: "https://en.wikipedia.org/wiki/Moringa_oleifera" }
            ],
            devices: [
                { name: "Hand Brace", price: "₹150-₹11000", link: "https://www.amazon.in/Hand-Wrist-Braces-Splints-Supports/s?rh=n%3A4264041031%2Cp_n_pct-off-with-tax%3A2665401031" },
                { name: "Xray Scan filter cam", price: "free", link: "https://play.google.com/store/apps/" }
            ]
        },
        leg_foot_fracture: {
            name: 'Leg & Foot Fracture',
            causes: 'High-impact trauma, falls, or osteoporosis can cause leg fractures.',
            prevention: 'Use safety gear, maintain bone health with calcium, and be cautious during activities.',
            solutions: 'Plaster casting, traction, surgery, and physiotherapy.',
            medicines: [
                { name: "Calcium Tablets", price: "₹250" },
                { name: "Ibuprofen", price: "₹30" }
            ],
            siddha: [
                { name: "Kottakkal Ayurvedic Oil", link: "https://shop.aryavaidyasala.com/medicines/tailam.html" }
            ],
            devices: [
                { name: "Leg Brace", price: "₹1220", link: "https://www.amazon.in/Vissco-Dynamic-Cock-Up-Splint-Extension/dp/B00I2NJ4BS/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.NzAbjSgkZUijYGx-wE2OtlASo_IGTpgBOHqyzpj1T4wBjWVBtjZSW27W9_D0W01lloEO8107DLKXYuGAgvJHkfX3VsvW7nKr_i9qoziNeZNcu7sCzsFlm8jAASApcahLgWsJ6RIuajNvUz5UF1FMnMUFkiJEn2CwRpDRlY_seNqYIGmcUUHJfFAsFQKoomYexvE_DrNaNnixLhD5mnf9JHMxKZwsqiq7S9VIeWMNNqNODHJUYuM5oMJL_ab5uF15jNcsZAU0nI0nvM9nPo_D4bJumXwKhGrt49PEhLe3TB8.DLgtAnmmoH3uDyRGEwsrnYpZc80NAOCmUccAUBq-Hgo&dib_tag=se&qid=1739284218&refinements=p_36%3A109900-250000&s=hpc&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1" }
            ]
        }
    };

    return diseaseData[disease];
}