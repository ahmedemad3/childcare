export const BookingQueries={
    SAVE_BOOKING:"INSERT INTO bookings (booking_code , caregiver_id, parent_id, start_date_time, end_date_time, status, created_on, created_by) VALUES ($1 , $2 , $3 , $4 , $5 , (SELECT BOOKIN_STATUS_CODE FROM BOOKING_STATUS WHERE LOWER(BOOKING_NAME) = LOWER($6)) , $7 , $8)",

}