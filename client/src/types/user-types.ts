export type CreateResponseType = {
  created: Boolean;
  error: Boolean;
  limit_reached: Boolean;
};

export type EmergencyCardType = {
  name: String;
  phone_number: Number;
};

export type BpmCardType = {
  date: String;
  bpm: Number;
};

export type CommunicationCardType = {
  category: String;
  text: String;
};

export type EventCardType = {
  date: String;
  text: String;
};

export type MedicineCardType = {
  name: String;
  quantity: Number;
  time_interval: Number;
};

export type ProfessionalCardType = {
  name: String;
  job: String;
  phone_number: Number;
};

export type ExerciseCardType = {
  name: String;
  minutes: Number;
};

export type UserDBType = {
  id?: String;
  name?: String;
  email?: String;
  age?: Number;
  height?: Number;
  weight?: Number;
  address?: String;
  emergency_card?: [EmergencyCardType];
  bpm_card?: [BpmCardType];
  communication_card?: [CommunicationCardType];
  event_card?: [EventCardType];
  medicine_card?: [MedicineCardType];
  professional_card?: [ProfessionalCardType];
  exercise_card?: [ExerciseCardType];
};

export type UserGoogleType = {
  uid: String;
  displayName: String;
  email: String;
};

export type UserType = UserDBType | UserGoogleType;