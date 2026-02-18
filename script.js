const yearElement = document.getElementById("year");
const languageButtons = document.querySelectorAll(".lang-btn");
const leadForm = document.getElementById("leadForm");
const carTypeSelect = document.getElementById("carTypeSelect");
const pickupDateInput = document.getElementById("pickupDate");
const returnDateInput = document.getElementById("returnDate");
const dailyPriceInput = document.getElementById("dailyPrice");
const estimatedTotalInput = document.getElementById("estimatedTotal");
const availabilityInfo = document.getElementById("availabilityInfo");
const leadSubmitButton = document.getElementById("leadSubmit");
const bookCarButtons = document.querySelectorAll(".book-car-btn");
const storageLanguageKey = "preferredLanguage";

const unavailableRangesByCar = {
  "Toyota Yaris": [{ start: "2026-02-20", end: "2026-02-23" }, { start: "2026-03-12", end: "2026-03-15" }],
  "Hyundai i20": [{ start: "2026-02-26", end: "2026-03-01" }],
  "Skoda Octavia": [{ start: "2026-02-22", end: "2026-02-25" }],
  "Volkswagen Passat": [{ start: "2026-03-10", end: "2026-03-14" }],
  "Nissan Qashqai": [{ start: "2026-02-19", end: "2026-02-21" }],
  "Kia Sportage": [{ start: "2026-03-02", end: "2026-03-06" }],
  "Mercedes C-Class": [{ start: "2026-02-27", end: "2026-03-02" }]
};

const translations = {
  en: {
    navWhyUs: "Why Us",
    navHow: "How It Works",
    navFleet: "Fleet",
    navBook: "Book Now",
    navReviews: "Reviews",
    navContact: "Contact",
    callNow: "Call Now",
    heroEyebrow: "5.0 ★ Local Rating",
    heroTitle: "Trusted Car Rental in Gemikonağı, Lefke",
    heroDesc:
      "Need a clean, reliable car today? Dizgin Rent A Car & Turizm helps students, families, and travelers get on the road quickly with friendly local support.",
    heroCall: "Call +90 533 846 15 15",
    heroWhatsapp: "WhatsApp Booking",
    trustHours: "Open: Mon–Sat, 8:00 AM–6:00 PM",
    trustAddress: "Address: Gemikonağı, Lefke",
    trustInstagram: "Instagram support available",
    quickFunnel: "Quick Booking Funnel",
    step1: "<strong>Step 1:</strong> Call or WhatsApp us",
    step2: "<strong>Step 2:</strong> Share your dates and location",
    step3: "<strong>Step 3:</strong> Confirm and pick up your car",
    startBooking: "Start Booking",
    whyTitle: "Why Choose Dizgin?",
    whyCard1Title: "Procedure-Focused Service",
    whyCard1Desc: "Customers highlight reliable and professional handling from start to finish.",
    whyCard2Title: "Excellent Reputation",
    whyCard2Desc: "Rated 5.0 with positive local reviews praising service quality and trust.",
    whyCard3Title: "Fast Communication",
    whyCard3Desc: "Reach the team directly through phone, WhatsApp, and Instagram.",
    howTitle: "How It Works",
    howStep1Title: "Contact Us",
    howStep1Desc: "Tell us your rental dates and pickup plan.",
    howStep2Title: "Get Your Offer",
    howStep2Desc: "Receive available car options and clear pricing details.",
    howStep3Title: "Drive with Confidence",
    howStep3Desc: "Pick up your car and enjoy your journey in Northern Cyprus.",
    formTitle: "Request a Rental Offer",
    formSubtitle: "Fill this quick form and we will open your WhatsApp message instantly.",
    fieldName: "Full Name",
    fieldPhone: "Phone Number",
    fieldPickupDate: "Pickup Date",
    fieldReturnDate: "Return Date",
    fieldPickupLoc: "Pickup Location",
    fieldCarType: "Preferred Car Type",
    fieldNotes: "Additional Notes",
    placeholderName: "Your full name",
    placeholderPhone: "+90 ...",
    placeholderPickupLoc: "Gemikonağı / Lefke",
    placeholderCarType: "Economy / SUV / Automatic",
    placeholderNotes: "Any details about your trip",
    formSubmit: "Send Request on WhatsApp",
    reviewsTitle: "Customer Reviews",
    reviewsSubtitle: "What people are saying (Google rating: 5.0 / 5)",
    review1: "A company that follows procedures. I was satisfied and recommend it.",
    review2: "A perfect business.",
    review3: "Super service.",
    contactTitle: "Visit or Contact Us",
    addressLabel: "Address:",
    mapCodeLabel: "Map code:",
    openDirections: "Open Directions",
    hoursTitle: "Business Hours",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    messageWhatsapp: "Message on WhatsApp",
    backTop: "Back to top",
    footerCredit: "Copyrighted and created by RollandTech"
  },
  tr: {
    navWhyUs: "Neden Biz",
    navHow: "Nasıl Çalışır",
    navFleet: "Filo",
    navBook: "Hemen Rezervasyon",
    navReviews: "Yorumlar",
    navContact: "İletişim",
    callNow: "Hemen Ara",
    heroEyebrow: "5.0 ★ Yerel Puan",
    heroTitle: "Gemikonağı, Lefke'de Güvenilir Araç Kiralama",
    heroDesc:
      "Bugün temiz ve güvenilir bir araca mı ihtiyacınız var? Dizgin Rent A Car & Turizm, öğrencilerin, ailelerin ve gezginlerin hızlıca yola çıkmasına yardımcı olur.",
    heroCall: "Ara +90 533 846 15 15",
    heroWhatsapp: "WhatsApp Rezervasyon",
    trustHours: "Açık: Pzt–Cts, 08:00–18:00",
    trustAddress: "Adres: Gemikonağı, Lefke",
    trustInstagram: "Instagram üzerinden destek mevcut",
    quickFunnel: "Hızlı Rezervasyon Akışı",
    step1: "<strong>Adım 1:</strong> Bizi arayın veya WhatsApp'tan yazın",
    step2: "<strong>Adım 2:</strong> Tarih ve konum bilgilerinizi paylaşın",
    step3: "<strong>Adım 3:</strong> Onaylayın ve aracınızı teslim alın",
    startBooking: "Rezervasyona Başla",
    whyTitle: "Neden Dizgin?",
    whyCard1Title: "Prosedüre Uygun Hizmet",
    whyCard1Desc: "Müşteriler, baştan sona güvenilir ve profesyonel hizmeti vurguluyor.",
    whyCard2Title: "Mükemmel İtibar",
    whyCard2Desc: "5.0 puan ve güven veren olumlu yerel yorumlar.",
    whyCard3Title: "Hızlı İletişim",
    whyCard3Desc: "Telefon, WhatsApp ve Instagram üzerinden hızlıca ulaşın.",
    howTitle: "Nasıl Çalışır",
    howStep1Title: "Bizimle İletişime Geçin",
    howStep1Desc: "Kiralama tarihlerinizi ve teslim planınızı paylaşın.",
    howStep2Title: "Teklifinizi Alın",
    howStep2Desc: "Uygun araç seçenekleri ve net fiyat bilgilerini alın.",
    howStep3Title: "Güvenle Yola Çıkın",
    howStep3Desc: "Aracınızı alın ve Kuzey Kıbrıs'ta keyifli yolculuk yapın.",
    formTitle: "Kiralama Teklifi İsteyin",
    formSubtitle: "Bu kısa formu doldurun, WhatsApp mesajınız hemen açılsın.",
    fieldName: "Ad Soyad",
    fieldPhone: "Telefon Numarası",
    fieldPickupDate: "Alış Tarihi",
    fieldReturnDate: "Dönüş Tarihi",
    fieldPickupLoc: "Teslim Alma Konumu",
    fieldCarType: "Tercih Edilen Araç Tipi",
    fieldNotes: "Ek Notlar",
    placeholderName: "Adınız soyadınız",
    placeholderPhone: "+90 ...",
    placeholderPickupLoc: "Gemikonağı / Lefke",
    placeholderCarType: "Ekonomik / SUV / Otomatik",
    placeholderNotes: "Yolculuğunuzla ilgili ek detaylar",
    formSubmit: "Talebi WhatsApp'ta Gönder",
    reviewsTitle: "Müşteri Yorumları",
    reviewsSubtitle: "Müşteriler ne söylüyor (Google puanı: 5.0 / 5)",
    review1: "Prosedürlere uygun çalışan bir firma. Memnun kaldım ve tavsiye ederim.",
    review2: "Mükemmel bir işletme.",
    review3: "Süper hizmet.",
    contactTitle: "Bizi Ziyaret Edin veya İletişime Geçin",
    addressLabel: "Adres:",
    mapCodeLabel: "Harita kodu:",
    openDirections: "Yol Tarifi Aç",
    hoursTitle: "Çalışma Saatleri",
    monday: "Pazartesi",
    tuesday: "Salı",
    wednesday: "Çarşamba",
    thursday: "Perşembe",
    friday: "Cuma",
    saturday: "Cumartesi",
    sunday: "Pazar",
    closed: "Kapalı",
    messageWhatsapp: "WhatsApp'tan Mesaj Gönder",
    backTop: "Yukarı Çık",
    footerCredit: "Telif hakkı saklıdır, RollandTech tarafından oluşturulmuştur"
  }
};

const applyLanguage = (languageCode) => {
  const dictionary = translations[languageCode] || translations.en;
  document.documentElement.lang = languageCode;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = dictionary[key];
    if (!value) {
      return;
    }

    if (value.includes("<strong>")) {
      element.innerHTML = value;
      return;
    }

    element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    const value = dictionary[key];
    if (value) {
      element.setAttribute("placeholder", value);
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === languageCode);
  });

  localStorage.setItem(storageLanguageKey, languageCode);
};

const detectBrowserLanguage = () => {
  const browserLanguage = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  return browserLanguage.startsWith("tr") ? "tr" : "en";
};

const runWhenIdle = (callback) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout: 500 });
    return;
  }
  window.setTimeout(callback, 1);
};

const initRevealAnimations = () => {
  const revealTargets = document.querySelectorAll(
    ".hero-copy, .hero-card, .feature-card, .steps article, .trust-card, .pricing-card, .fleet-card, .lead-form, .reviews-grid blockquote, .contact-copy, .contact-card"
  );

  if (!revealTargets.length) {
    return;
  }

  revealTargets.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.transitionDelay = `${Math.min(index * 60, 360)}ms`;
  });

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("in-view");
        instance.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((item) => observer.observe(item));
};

const smoothScrollToId = (targetId) => {
  const target = document.querySelector(targetId);
  if (!target) {
    return;
  }

  const header = document.querySelector(".site-header");
  const headerOffset = header ? header.offsetHeight + 10 : 0;
  const topPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: topPosition, behavior: "smooth" });
};

const parseLocalDate = (value) => {
  if (!value) {
    return null;
  }
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const getSelectedDailyRate = () => {
  if (!carTypeSelect) {
    return 0;
  }
  const selectedOption = carTypeSelect.options[carTypeSelect.selectedIndex];
  const rate = Number(selectedOption?.dataset?.rate || 0);
  return Number.isFinite(rate) ? rate : 0;
};

const calculateRentalDays = () => {
  const pickupDate = parseLocalDate(pickupDateInput?.value);
  const returnDate = parseLocalDate(returnDateInput?.value);

  if (!pickupDate || !returnDate) {
    return 0;
  }

  const diffMs = returnDate.getTime() - pickupDate.getTime();
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return days > 0 ? days : 0;
};

const applyLongTermDiscount = (subtotal, days) => {
  if (days >= 30) {
    return subtotal * 0.82;
  }
  if (days >= 14) {
    return subtotal * 0.88;
  }
  if (days >= 7) {
    return subtotal * 0.92;
  }
  return subtotal;
};

const hasDateOverlap = (startDate, endDate, range) => {
  const blockStart = parseLocalDate(range.start);
  const blockEnd = parseLocalDate(range.end);
  if (!blockStart || !blockEnd) {
    return false;
  }
  return startDate <= blockEnd && endDate >= blockStart;
};

const formatUnavailableRanges = (carName) => {
  const ranges = unavailableRangesByCar[carName] || [];
  if (!ranges.length) {
    return "No blocked dates currently for this car.";
  }
  return ranges.map((range) => `${range.start} to ${range.end}`).join(" · ");
};

const updateBookingEstimate = () => {
  const dailyRate = getSelectedDailyRate();
  const days = calculateRentalDays();
  const subtotal = dailyRate * days;
  const finalTotal = applyLongTermDiscount(subtotal, days);

  if (dailyPriceInput) {
    dailyPriceInput.value = `€${dailyRate}/day`;
  }

  if (estimatedTotalInput) {
    estimatedTotalInput.value = `€${Math.round(finalTotal)}`;
  }

  const carName = carTypeSelect?.value;
  const pickupDate = parseLocalDate(pickupDateInput?.value);
  const returnDate = parseLocalDate(returnDateInput?.value);
  const carRanges = unavailableRangesByCar[carName] || [];

  if (!carName) {
    if (availabilityInfo) {
      availabilityInfo.textContent = "Select a car and dates to check availability.";
    }
    if (leadSubmitButton) {
      leadSubmitButton.disabled = false;
    }
    return;
  }

  if (!pickupDate || !returnDate) {
    if (availabilityInfo) {
      availabilityInfo.textContent = `Unavailable dates: ${formatUnavailableRanges(carName)}`;
    }
    if (leadSubmitButton) {
      leadSubmitButton.disabled = false;
    }
    return;
  }

  if (returnDate <= pickupDate) {
    if (availabilityInfo) {
      availabilityInfo.textContent = "Return date must be after pickup date.";
    }
    if (leadSubmitButton) {
      leadSubmitButton.disabled = true;
    }
    return;
  }

  const hasConflict = carRanges.some((range) => hasDateOverlap(pickupDate, returnDate, range));

  if (hasConflict) {
    if (availabilityInfo) {
      availabilityInfo.textContent = `Selected dates are unavailable for ${carName}. Blocked ranges: ${formatUnavailableRanges(carName)}`;
    }
    if (leadSubmitButton) {
      leadSubmitButton.disabled = true;
    }
    return;
  }

  if (availabilityInfo) {
    availabilityInfo.textContent = `${carName} is available for the selected dates. Estimated total: €${Math.round(finalTotal)}.`;
  }
  if (leadSubmitButton) {
    leadSubmitButton.disabled = false;
  }
};

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("preferredLanguage");
const initialLanguage = savedLanguage === "tr" || savedLanguage === "en"
  ? savedLanguage
  : detectBrowserLanguage();
applyLanguage(initialLanguage);
runWhenIdle(initRevealAnimations);

if (pickupDateInput && returnDateInput) {
  const today = new Date().toISOString().split("T")[0];
  pickupDateInput.min = today;
  returnDateInput.min = today;

  pickupDateInput.addEventListener("change", () => {
    returnDateInput.min = pickupDateInput.value || today;
    updateBookingEstimate();
  });

  returnDateInput.addEventListener("change", updateBookingEstimate);
}

if (carTypeSelect) {
  carTypeSelect.addEventListener("change", updateBookingEstimate);
}

bookCarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const carName = button.dataset.car;
    if (carTypeSelect && carName) {
      carTypeSelect.value = carName;
    }
    updateBookingEstimate();
    smoothScrollToId("#book-now");
  });
});

updateBookingEstimate();

const urlParams = new URLSearchParams(window.location.search);
const preselectedCar = urlParams.get("car");
if (preselectedCar && carTypeSelect) {
  const hasOption = Array.from(carTypeSelect.options).some((option) => option.value === preselectedCar);
  if (hasOption) {
    carTypeSelect.value = preselectedCar;
    updateBookingEstimate();
  }
}

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (leadSubmitButton?.disabled) {
      return;
    }

    const formData = new FormData(leadForm);
    const currentLanguage = localStorage.getItem(storageLanguageKey) === "tr" ? "tr" : "en";
    const dailyRate = getSelectedDailyRate();
    const rentalDays = calculateRentalDays();
    const estimatedTotal = Math.round(applyLongTermDiscount(dailyRate * rentalDays, rentalDays));
    const labels = {
      en: {
        title: "New rental request",
        name: "Name",
        phone: "Phone",
        pickupDate: "Pickup date",
        returnDate: "Return date",
        pickupLocation: "Pickup location",
        carType: "Car type",
        dailyRate: "Daily rate",
        rentalDays: "Rental days",
        estimatedTotal: "Estimated total",
        notes: "Notes"
      },
      tr: {
        title: "Yeni araç kiralama talebi",
        name: "Ad Soyad",
        phone: "Telefon",
        pickupDate: "Alış tarihi",
        returnDate: "Dönüş tarihi",
        pickupLocation: "Teslim alma konumu",
        carType: "Araç tipi",
        dailyRate: "Günlük ücret",
        rentalDays: "Kiralama günü",
        estimatedTotal: "Tahmini toplam",
        notes: "Notlar"
      }
    };

    const i18n = labels[currentLanguage];
    const message = [
      `*${i18n.title}*`,
      `${i18n.name}: ${formData.get("name") || "-"}`,
      `${i18n.phone}: ${formData.get("phone") || "-"}`,
      `${i18n.pickupDate}: ${formData.get("pickupDate") || "-"}`,
      `${i18n.returnDate}: ${formData.get("returnDate") || "-"}`,
      `${i18n.pickupLocation}: ${formData.get("pickupLocation") || "-"}`,
      `${i18n.carType}: ${formData.get("carType") || "-"}`,
      `${i18n.dailyRate}: €${dailyRate}/day`,
      `${i18n.rentalDays}: ${rentalDays || 0}`,
      `${i18n.estimatedTotal}: €${estimatedTotal || 0}`,
      `${i18n.notes}: ${formData.get("notes") || "-"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/905338461515?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") {
      return;
    }

    event.preventDefault();
    smoothScrollToId(targetId);
  });
});