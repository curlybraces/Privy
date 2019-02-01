export default {
    password_length: 12,
    UNICODE_MIN: 33,
    UNICODE_MAX: 126,
    uppercase: {
        allowed: true,
        COUNT: 26,
        UNICODES: [
            65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76,
            77, 78, 79, 80, 81, 82,
            83, 84, 85, 86, 87, 88,
            89, 90
        ]
    },
    lowercase: {
        allowed: true,
        COUNT: 26,
        UNICODES: [
            97, 98, 99, 100, 101, 102, 
            103, 104, 105, 106, 107, 108, 
            109, 110, 111, 112, 113, 114,
            115, 116, 117, 118, 119, 120,
            121, 122
        ]
    },
    digits: {
        allowed: true,
        COUNT: 10,
        UNICODES: [
            48, 49, 50, 51, 52,
            53, 54, 55, 56, 57
        ]
    }
}