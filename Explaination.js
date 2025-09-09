1. Signup & Login (User Authentication)

React Topics Applied:

useState: Form input states (username, password, error) সংরক্ষণ করতে।
উদাহরণ:

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


Event Handling: Button click বা input change handle করতে।
উদাহরণ:

<input value={username} onChange={(e) => setUsername(e.target.value)} />
<button onClick={handleLogin}>Login</button>


Conditional Rendering: ভুল ইনপুট থাকলে error message দেখানো।
উদাহরণ:

<p style={{ color: "red" }}>{error}</p>


React Router: Login এবং Signup page navigation handle করতে।
উদাহরণ:

navigate("/dashboard");


Feature Bangla Explanation:

ব্যবহারকারী নতুন হলে Signup করে।

বিদ্যমান ব্যবহারকারী Login করে।

যদি ফাঁকা ইনপুট থাকে, alert বা error দেখানো হয়।

2. Dashboard

React Topics Applied:

JSX: Dashboard এ হেডিং, প্যারাগ্রাফ, এবং লিংক দেখানোর জন্য।

React Router: অন্য page (Schedule, Daily Summary) এ navigation।

Feature Bangla Explanation:

Login করার পর ব্যবহারকারী Dashboard page এ যায়।

এখানে Welcome Message এবং navigation button/link থাকে।

3. Medicine Schedule

React Topics Applied:

useState: Medicine list (med1, med2), name, dose, time track করতে।

Conditional Rendering: Table এ taken / pending status দেখানোর জন্য।

Event Handling: Add medicine button click handle করতে।

Props (যদি NextMedicine বা DailySummary ব্যবহার করে)।

Feature Bangla Explanation:

ব্যবহারকারী medicine add করতে পারে।

Medicine take করার পর status update হয়।

Table এ medicine নাম, dose, time, status, action button দেখানো হয়।

4. Doctor Schedule

React Topics Applied:

JSX + Table: Doctor schedule প্রদর্শনের জন্য।

useState: যদি doctor slot update করতে চাও (future feature)।

Conditional Rendering: Slot Available / Booked দেখানোর জন্য।

Feature Bangla Explanation:

Doctor এর time slot এবং status দেখানো।

Slot manual বা hardcoded, future update possible।

5. Daily Summary

React Topics Applied:

Props: Schedule থেকে medicine data pass করতে।

Array filtering (without map or with map) → taken medicines আলাদা করতে।

useState + JSX: List display করার জন্য।

Feature Bangla Explanation:

আজকের সব medicines taken / pending status দেখানো।

ব্যবহারকারী তার দৈনিক medicine routine review করতে পারে।

6. Next Medicine Reminder

React Topics Applied:

useEffect: Medicine list এর update detect করে next medicine বের করার জন্য।

Props: Schedule থেকে medicine data receive করা।

State Management: Next medicine set করা।

Feature Bangla Explanation:

পরবর্তী কোন medicine নিতে হবে তা দেখানো।

যদি সব medicine taken হয় → message hidden।

Summary Table (Feature ↔ React Topic)
Feature	React Topics Applied	Bangla Explanation
function SignUp():functional Component.
Signup/Login	useState, Event Handling, Conditional Rendering, React Router	Form input capture, error display, page navigation
Dashboard	JSX, React Router	Welcome message + navigation links
Medicine Schedule	useState, Event Handling, Conditional Rendering, Props	Add, mark as taken, table display
Doctor Schedule	JSX, Conditional Rendering, useState	Doctor slot status display
Daily Summary	Props, useState, Array filtering	Shows taken/pending medicines
Next Medicine Reminder	useEffect, Props, useState	Shows upcoming medicine automatically
