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
            ]
        }
    };

    return diseaseData[disease];
}
