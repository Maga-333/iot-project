document.addEventListener("DOMContentLoaded", function() {
    // Reset checkboxes on page load
    document.querySelectorAll('input[name="disease"]').forEach(input => input.checked = false);
});

document.getElementById('diseaseForm').addEventListener('change', function(event) {
    const checkboxes = document.querySelectorAll('input[name="disease"]:checked');
    const diseaseInfoDiv = document.getElementById('diseaseInfo');
    diseaseInfoDiv.innerHTML = ''; // Clear previous information

    checkboxes.forEach((checkbox) => {
        const disease = checkbox.value;
        const info = getDiseaseInfo(disease);
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
                                <div class="devices-list">
                                    <h3>Devices and Apps:</h3>
                                    ${info.devices.map(dev => `<div class="device-item">
                                                                    <p><strong>${dev.name}</strong></p>
                                                                    <p>Price: ${dev.price}</p>
                                                                    <p>Link: <a href="${dev.link}" target="_blank">More Info</a></p>
                                                                </div>`).join('')}
                                </div>`;
        diseaseInfoDiv.appendChild(diseaseDiv);
    });
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
            devices: [
                { name: 'Blood Pressure Monitor', price: '₹200-₹2800', link: 'https://www.amazon.in/Blood-Pressure-Monitors/b?ie=UTF8&node=3150031031' },
                { name: 'BP Tracker App', price: 'Free', link:'https://play.google.com/store/apps/' }
            ]
        }
    };

    return diseaseData[disease];
}