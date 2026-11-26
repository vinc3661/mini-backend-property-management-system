import { pool } from "../config/db";

interface Payment {
    id: string;
    phone_number: string;
    amount: number;
    student_id: string;
    payment_status: string;
}

interface CreatePaymentInput {
    phoneNumber: string;
    amount: number;
    studentId: string;
}

export async function createPayment({
    phoneNumber,
    amount,
    studentId
}: CreatePaymentInput): Promise<Payment> {

    const result = await pool.query<Payment>(
        `
        INSERT INTO payments (
            phone_number,
            amount,
            student_id
        )
        VALUES ($1, $2, $3)
        RETURNING id, phone_number, amount, student_id, payment_status
        `,
        [phoneNumber, amount, studentId]
    );

    return result.rows[0];
}