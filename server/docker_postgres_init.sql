CREATE TABLE IF NOT EXISTS users
(
    id uuid NOT NULL,
    username VARCHAR ( 255 ) UNIQUE NOT NULL,
    first_name VARCHAR ( 255 ) NOT NULL,
    last_name VARCHAR ( 255 ) NOT NULL,
    city VARCHAR ( 255 ) NOT NULL,
    address VARCHAR ( 255 ) NOT NULL,
    zip bigint NOT NULL,
    credit_card_code bigint NOT NULL,
    cvv bigint NOT NULL,
    name VARCHAR ( 255 ) NOT NULL,
    date timestamp with time zone,
    CONSTRAINT user_pkey PRIMARY KEY (id)
);
