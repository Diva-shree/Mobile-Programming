import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase, ref, set, get, update, remove }
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

// 🔐 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBR24c574p1u9L9HfZtHezI7egvwT9Ol1I",
  authDomain: "mobile-programming-56d67.firebaseapp.com",
  databaseURL: "https://mobile-programming-56d67-default-rtdb.firebaseio.com",
  projectId: "mobile-programming-56d67",
  storageBucket: "mobile-programming-56d67.firebasestorage.app",
  messagingSenderId: "417693992122",
  appId: "1:417693992122:web:d0362fef125622d71eae83",
  measurementId: "G-CFBX0HVX9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase connected:", db);

// Utility
function showResult(title, data) {
  console.log(title, data);
  alert(title + "\n" + JSON.stringify(data, null, 2));
}

// CREATE MESSAGE
window.createMessageFromForm = async function () {
  try {
    const id = document.getElementById("contact-id").value.trim();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!id) return alert("ID is required");

    await set(ref(db, "contacts/" + id), {
      name,
      email,
      subject,
      message,
      timestamp: Date.now()
    });

    showResult("✅ Message sent successfully", { id, name });

  } catch (error) {
    alert("❌ Error: " + error.message);
  }
};

// READ ALL
window.readAllMessagesFromForm = async function () {
  try {
    const snapshot = await get(ref(db, "contacts"));

    if (snapshot.exists()) {
      showResult("📩 All messages", snapshot.val());
    } else {
      alert("No messages found.");
    }

  } catch (error) {
    alert("Error: " + error.message);
  }
};

// READ BY ID
window.readMessageByIdFromForm = async function () {
  try {
    const id = document.getElementById("read-contact-id").value.trim();

    const snapshot = await get(ref(db, "contacts/" + id));

    if (snapshot.exists()) {
      showResult("📄 Message details", snapshot.val());
    } else {
      alert("No message found.");
    }

  } catch (error) {
    alert("Error: " + error.message);
  }
};

// UPDATE
window.updateMessageFromForm = async function () {
  try {
    const id = document.getElementById("update-contact-id").value.trim();
    const name = document.getElementById("update-contact-name").value.trim();
    const email = document.getElementById("update-contact-email").value.trim();
    const message = document.getElementById("update-contact-message").value.trim();

    await update(ref(db, "contacts/" + id), {
      name,
      email,
      message
    });

    showResult("✏️ Message updated successfully", { id });

  } catch (error) {
    alert("Error: " + error.message);
  }
};

// DELETE
window.deleteMessageFromForm = async function () {
  try {
    const id = document.getElementById("delete-contact-id").value.trim();

    await remove(ref(db, "contacts/" + id));

    showResult("🗑️ Message deleted successfully", { id });

  } catch (error) {
    alert("Error: " + error.message);
  }
};