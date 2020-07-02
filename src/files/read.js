import React from 'react'; 
import * as firebase from 'firebase';



export function addMedicine(medicine, addComplete){

    firebase.firestore()
    .collection('Medicines')
    .add({
        name: medicine.name,
        color: medicine.color,
        dose:  medicine.dose,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((doc) => {console.log(doc.id);})
    //.then((medicineData)=>addComplete(medicineData.data()))
    .catch((error) => console.log(error));
    
}

export async function getMedicines(medicinesRetreived){

    var medicineList=[];

    var snapshot = await firebase.firestore()
    .collection('Medicines')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc)=>{
        medicineList.push(doc.data());
    });

    console.log(medicineList);
    medicinesReceived(medicineList);
}