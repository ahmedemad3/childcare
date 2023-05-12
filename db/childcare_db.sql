CREATE TABLE childcare.user_type (
  user_type_id  serial NOT NULL ,
  user_type_name VARCHAR(50) NOT NULL,
  user_type_code VARCHAR(10) NOT NULL unique,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  PRIMARY KEY (user_type_id)
);

CREATE TABLE childcare.users (
  user_id serial NOT NULL,
  username VARCHAR(50) NOT NULL unique,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL unique,
  fullname VARCHAR(255) NOT NULL,
  mobile_number VARCHAR(20) NOT NULL,
  user_type_code VARCHAR(10) NOT NULL REFERENCES childcare.user_type(user_type_code),
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  updated_on TIMESTAMP DEFAULT NULL,
  updated_by VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE childcare.location (
  location_id serial NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  updated_on TIMESTAMP DEFAULT NULL,
  updated_by VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (location_id)
);

CREATE TABLE childcare.availability (
  availability_id serial NOT NULL,
  caregiver_id INT NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  day_of_week VARCHAR(20) NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  updated_on TIMESTAMP DEFAULT NULL,
  updated_by VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (availability_id)
  --FOREIGN KEY (caregiver_id) REFERENCES caregiver(caregiver_id)
);


CREATE TABLE childcare.caregiver (
  caregiver_id serial NOT NULL,
  caregiver_name VARCHAR(255) NOT NULL,
  caregiver_description VARCHAR(500),
  user_id INT NOT NULL,
  caregiver_mobile_number VARCHAR(20) NOT NULL,
  location_id INT NOT NULL,
  hourly_rate DECIMAL(10, 2),
  availabilty_id INT NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by VARCHAR(50) NOT NULL,
  updated_on TIMESTAMP DEFAULT NULL,
  updated_by VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (caregiver_id),
  FOREIGN KEY (user_id) REFERENCES childcare.users(user_id),
  FOREIGN KEY (location_id) REFERENCES childcare.location(location_id),
  FOREIGN KEY (availabilty_id) REFERENCES childcare.availability(availability_id)
);
