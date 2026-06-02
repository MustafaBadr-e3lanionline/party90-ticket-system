const SUPABASE_URL =
"https://zougtuucbsgvgjrvkqgb.supabase.co";

const SUPABASE_KEY =
"sb_publishable_JC9p2r1TztFRwykpPGvGiA_VROtlkii";

const supabaseClient =
supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const eventDate = new Date("July 17, 2026 18:00:00").getTime();

function countdown() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

countdown();
setInterval(countdown, 1000);

const bookingForm =
document.getElementById("bookingForm");

bookingForm.addEventListener(
    "submit",
    async function (e) {

        e.preventDefault();

        const status =
        document.getElementById("statusMessage");

        status.innerHTML =
        "جاري رفع صورة الإيصال...";

        const file =
        document.getElementById("paymentImage")
        .files[0];

        const formData =
        new FormData();

        formData.append(
            "file",
            file
        );

        formData.append(
            "upload_preset",
            "party90_uploads"
        );

        try {

           const imageUrl =
data.secure_url;

const customerName =
document.getElementById("customerName")
.value;

const phone =
document.getElementById("phone")
.value;

const { error } =
await supabaseClient
.from("tickets")
.insert([
{
    customer_name: customerName,
    phone: phone,
    payment_image: imageUrl,
    payment_status: "pending",
    used: false
}
]);

if (error) {

    console.error(error);

    status.innerHTML =
    "❌ حدث خطأ أثناء حفظ الحجز";

} else {

    status.innerHTML =
    "✅ تم تسجيل الحجز بنجاح";

    bookingForm.reset();
}

        } catch (error) {

            console.error(error);

            status.innerHTML =
            "❌ حدث خطأ أثناء رفع الصورة";

        }

    }
);
