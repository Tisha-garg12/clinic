# Clinic-Management
A Seemless communication with Doctor and Receptionist Using MERN Stack

# Installation
1.Clone the repository:

    git clone https://github.com/Tisha-garg12/clinic.git

2.Navigate to the project folder:

    cd clinic-mgmt-system

3.Navigate to the frontend folder:

    cd client

4.Navigate to the backend folder:

    cd server

5.Install dependencies:

    npm install

# Workflow

### 1. Patient Registration and Token Generation

- The patient visits the receptionist and provides necessary details.
- The receptionist generates a unique token ID for the patient.

### 2. Doctor Consultation

- The doctor accesses the patient's token ID to view previous prescriptions and medical history.
- After consultation, the doctor provides a new prescription.

### 3. Billing

- The receptionist performs billing using the patient's token ID.
- Billing includes details of the prescribed medication and doctor's consultation.

# Usage

### 1. Receptionist Login:

- Login to the receptionist panel using the credentials:
  - Email: `tisha@gmail.com`
  - Password: `ashu`
- Navigate to the patient registration section.

### 2. Generate Token:

- Register new patients by entering their details.
- Generate a unique token ID for the patient.
- Provide patients with the generated token ID for future consultations.

### 3. Doctor Login:

- Access the doctor's panel with the following credentials:
  - Email: `ashu@gmail.com`
  - Password: `ashu`

### 4. Retrieve Patient Information:

- Enter the patient's token ID to access their medical history and previous prescriptions.
- Consult with the patient and provide a new prescription.

### 5. Prescription Details:

- The prescription includes details about prescribed medications, recommended treatments, and any additional notes.

### 6. Receptionist Billing:

- Login to the receptionist panel.
- Retrieve patient details using the token ID.
- Review the doctor's prescribed information and patient's medical history.
- Enter billing details, including the consultation fee and prescribed medications cost.
- Confirm the billing transaction.

# Features

1. **Appointment Scheduling**
   - Allow patients to schedule appointments with doctors.
   - Implement a calendar system for managing appointments.
   - Send reminders to patients about upcoming appointments.

2. **Patient Records**
   - Maintain comprehensive electronic health records for each patient.
   - Include information about allergies, previous illnesses, and surgeries.

3. **Medication Management**
   - Create a system to manage and track prescribed medications.
   - Implement alerts for medication schedules and refills.

4. **Billing History**
   - Keep a detailed history of billing transactions for each patient.
   - Provides a clear breakdown of charges for consultations, medications, and other services.

5. **Multi-User Roles**
   - Differentiate between roles such as receptionist, and doctor.
   - Assigned specific permissions and access levels based on roles.

6. **Prescription History**
   - Maintain a detailed history of prescriptions for each patient.

## Addtional Features
- The Patient can give the phone to retrieve the details so that if the patient came at night then he can visit next day with same token id
- If the Token id is lost then the patient can provide the phone number to retrive the all details

![Screenshot (241)](https://github.com/user-attachments/assets/60018646-4d67-42dc-b4a0-f55028c973b8)

![Screenshot (239)](https://github.com/user-attachments/assets/589de515-3bc4-4b30-9458-9703c9365fe8)

![Screenshot (240)](https://github.com/user-attachments/assets/1f991ec1-a5fa-482a-86cd-28bd10921e5f)



