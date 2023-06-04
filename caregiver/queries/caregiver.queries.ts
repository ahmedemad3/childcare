export const Caregiver_Queries={
    CREATE_CAREGIVER:"INSERT INTO caregiver (name, description, user_id, mobile_number, location_id, hourly_rate, availability_id , created_on, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7 , $8 , $9) RETURNING * ",
    CAREGIVER_SEARCH: "SELECT * FROM caregiver WHERE 1 = 1 ",
    CAREGIVER_SEARCH_LOCATION: " AND location_id = $1 ",
    CAREGIVER_SEARCH_AVAILABILTY: " AND availability_id = $  ",
    CAREGIVER_SEARCH_HOURLY_RATE: " AND hourly_rate <= $  ",
}