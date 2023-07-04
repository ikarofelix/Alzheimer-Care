import { gql } from "@apollo/client";

export const USER_DASHBOARD_QUERY = gql`
  query User {
    user {
      id
      name
      email
      age
      weight
      height
      address
      emergency_card {
        name
        phone_number
      }
      bpm_card {
        date
        bpm
      }
      communication_card {
        category
        text
      }
      event_card {
        date
        text
      }
      medicine_card {
        name
        quantity
        time_interval
      }
      professional_card {
        name
        job
        phone_number
      }
      exercise_card {
        name
        minutes
      }
    }
  }
`;

export const AUTHENTICATE_USER_QUERY = gql`
  query Authenticate($user: UserGoogle!) {
    authenticate(user: $user)
  }
`;
