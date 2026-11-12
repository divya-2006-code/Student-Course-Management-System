
# SCMS Database Schema

## 1. User Collection
Stores student and administrator information.

Fields:
- name
- email
- passwordHash
- role
- department
- createdAt
- updatedAt

## 2. Course Collection
Stores course information.

Fields:
- courseName
- courseCode
- instructor
- duration
- category
- level
- status
- imageUrl
- description
- price
- createdAt
- updatedAt

## 3. Enrollment Collection
Connects students with courses.

Fields:
- student (User reference)
- course (Course reference)
- status
- enrolledAt
- createdAt
- updatedAt

Unique index: student + course

## 4. LearningProgress Collection
Stores student learning progress.

Fields:
- student (User reference)
- course (Course reference)
- completedLessons
- totalLessons
- progressPercentage
- createdAt
- updatedAt

Unique index: student + course

## 5. Notification Collection
Stores notifications for users.

Fields:
- recipient (User reference)
- message
- isRead
- createdAt
- updatedAt

Index: recipient + createdAt

## 6. Message Collection
Stores messages exchanged between users.

Fields:
- sender (User reference)
- recipient (User reference)
- text
- createdAt
- updatedAt

Index: sender + recipient + createdAt

## Database Relationships

User 1 -------- Many Enrollment
Course 1 ------ Many Enrollment

User 1 -------- Many LearningProgress
Course 1 ------ Many LearningProgress

User 1 -------- Many Notification

User 1 -------- Many Messages (as sender)
User 1 -------- Many Messages (as recipient)
