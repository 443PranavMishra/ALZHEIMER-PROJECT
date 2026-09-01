const TRANSLATIONS = {
  en: {
    "dashboard.subGreeting": "Here's your day at a glance.",
    "nav.profile": "Profile", "nav.quizGames": "Quiz & Games", "nav.emergency": "Emergency help",
    "nav.sos": "SOS", "nav.knowApp": "Know About Application", "nav.askSmriti": "Ask Smriti",
    "stat.tasksToday": "Tasks completed today",
    "stat.quizGamesWeek": "Quiz & games accuracy this week \u2014 tap to play",
    "panel.timetable": "Today's timetable", "panel.events": "Important events & dates",
    "panel.location": "Current location", "panel.findThings": "Find My Things",
    "panel.recognizePerson": "Recognize a person", "intro.title": "Know About Application",
    "stat.allDone": "All done",
    "stat.left": "left",
    "stat.noTasksYet": "No tasks yet",
    "stat.noneScheduled": "None scheduled",
    "stat.nothingLeftToday": "Nothing left today",
    "stat.quizLabel": "Quiz",
    "stat.gamesLabel": "Games",
    "stat.pts": "pts",
    "stat.noDataYet": "no data yet",
    "stat.upcomingEvent": "Upcoming event",
    "stat.nextTask": "Next task",
    "timetable.empty": "No tasks yet — tap Add task to build the daily routine.",
    "events.empty": "No events yet — tap Add event for appointments, birthdays, and more.",
    "camera.live": "Camera is live — center your face, then tap Scan.",
    "camera.permissionNeeded": "Camera access is needed to continue. Please allow camera permission.",
    "objects.cameraLive": "Camera is live — center the object, then tap Take photo.",
    "location.getting": "Getting current location…",
    "location.accurateTo": "Accurate to within",
    "location.phonesNote": "phones with real GPS are far more precise than laptops.",
    "location.lastUpdated": "Last updated",
    "location.errorGeneric": "Could not get location.",
    "location.errorDenied": "Location access denied — allow location permission to see live position.",
    "location.errorUnavailable": "Location unavailable right now.",
    "location.errorTimeout": "Location request timed out.",
    "location.notAvailable": "Not available",
    "location.notSupported": "Geolocation isn't supported on this device/browser.",
    "location.refresh": "Refresh live location",
    "trend.green": "Improving",
    "trend.yellow": "Steady",
    "trend.red": "Needs attention",
    "chart.pointsThisWeek": "points earned this week (quiz + games)",
    "chart.noActivityWeek": "No activity yet this week",
    "chart.pointsLast8Weeks": "points over the last 8 weeks (quiz + games)",
    "chart.noActivityMonth": "No activity yet this month",
    "chart.accuracySpeed": "accuracy + speed combined",
    "chart.noActivityWeekQG": "No quiz or game activity yet this week",
    "section.progress": "Progress",
    "section.schedule": "Schedule",
    "section.safety": "Safety & quick actions",
    "chart.title": "Memory & recall progress",
    "chart.subtitle": "Based on quiz results over time",
    "chart.shortTerm": "Short-term",
    "chart.longTerm": "Long-term",
    "chart.brainAccuracy": "Brain accuracy",
    "recognize.subtitle": "Point the camera at them and tap Scan.",
    "recognize.searchPeople": "Search people",
    "recognize.scanBtn": "Scan this person",
    "timetable.subtitle": "Daily routine — add, edit, and confirm each task.",
    "timetable.addTask": "Add task",
    "events.subtitle": "One-off reminders — appointments, birthdays, and more.",
    "events.addEvent": "Add event",
    "objects.subtitle": "Photograph an object and note where you put it.",
    "objects.search": "Search",
    "objects.takePhoto": "Take photo",
    "common.loading": "Loading…",
    "quiz.nextIn": "Next in",
    "quiz.level": "Level:",
    "quiz.catchingUpOn": "Catching up on",
    "diff.easy": "Easy",
    "diff.medium": "Medium",
    "diff.hard": "Hard",
    "diff.personal": "Personal",
    "diff.orientation": "Orientation",
    "dayDetail.notAttempted": "Not attempted",
    "dayDetail.correct": "Correct",
    "dayDetail.incorrect": "Incorrect",
    "dayDetail.correctAnswer": "Correct answer:",
    "quiz.notQuite": "Not quite — the correct answer was",
    "game.notAvailable": "Not available yet",
    "game.alreadyCompleted": "You already completed this — great job!",
    "game.alreadyPlayed": "You already played this round.",
    "game.tracedPrefix": "You traced the",
    "game.tracedSuffix": "! Great job.",
    "game.wonderful": "Wonderful! You earned",
    "game.point": "point",
    "game.points": "points",
    "game.notQuitePrefix": "Not quite — the answer was",
    "game.niceTry": "Nice try!",
    "game.goodEffort": "Good effort! On to the next one.",
    "quiz.correctFeedback": "Correct! You earned",
    "quiz.pointsWord": "points",
    "quiz.of": "of",
    "quiz.correctWord": "correct",
    "quiz.comeBack": "come back",
    "quiz.tomorrow": "tomorrow",
    "quiz.nextWeek": "next week",
    "quiz.forNewSet": "for a new set",
    "game.pointsExclaim": "points!",
    "game.seeYouTomorrow": "see you next Sunday for a new game!",
    "quiz.tabDaily": "Today's quiz",
    "quiz.tabGame": "Today's game",
    "quiz.historyBtn": "History",
    "quiz.doneForNow": "Done for now",
    "history.title": "Daily history",
    "history.subtitle": "See which days you completed — and finish any you missed.",
    "quiz.backToQuiz": "Back to quiz",
    "dayDetail.legend": "Green = correct, red = wrong, grey = not attempted.",
    "quiz.quizWord": "Quiz",
    "dayDetail.backToHistory": "Back to history",
    "intro.subtitle": "Everything in Smriti, what it's for, and how to use it.",
    "intro.gotIt": "Got it",
    "intro.recognizePerson.title": "Recognize a Person",
    "intro.recognizePerson.where": "Dashboard, next to your progress chart",
    "intro.recognizePerson.desc": "Point the camera at someone and tap Scan to see their name, relation to you, and any memory notes. If they are not recognized yet, you can add them right there with a photo. Tap Search people to browse everyone you have registered, with real photos.",
    "intro.timetable.title": "Today's Timetable",
    "intro.timetable.where": "Dashboard, Schedule section",
    "intro.timetable.desc": "Your daily routine -- meals, medication, bathing, and more. Each task has a start and end time, with sound reminders as it's due. Tap Confirm once you've done it, and it's marked with a tick; if you miss it, it shows a cross. You can add, edit, or delete tasks any time.",
    "intro.events.title": "Important Events",
    "intro.events.where": "Dashboard, beside the Timetable",
    "intro.events.desc": "Add one-off appointments, birthdays, or other special dates. You'll get a sound alert on the day and time you chose. Tap OK on the alert once you've seen it, and the event is cleared automatically.",
    "intro.quizGames.title": "Quiz & Games",
    "intro.quizGames.where": "Quiz and Games button at the top, or tap your weekly score card",
    "intro.quizGames.desc": "A short quiz every day, plus a different mini-game each day, to keep your mind gently active. Questions get a little easier or harder depending on how you're doing. Use the History button inside to see which days you completed, and catch up on any you missed.",
    "intro.findThings.title": "Find My Things",
    "intro.findThings.where": "Dashboard, beside Current Location",
    "intro.findThings.desc": "Photograph an item and note where you put it, like Party coat in the upper shelf of the almirah. Later, tap Search to browse everything you have saved, with real photos, or search by name or location to jog your memory.",
    "intro.location.title": "Current Location",
    "intro.location.where": "Dashboard",
    "intro.location.desc": "Shows your real location on a live map, using your device GPS. Tap Refresh live location any time to update it -- useful for your caretaker to know where you are if needed.",
    "intro.profile.title": "Profile",
    "intro.profile.where": "Profile button at the top",
    "intro.profile.desc": "Your personal details, your caretaker's contact info, and settings like your neighbour's phone number. Keep this up to date so the Emergency screen always has the right numbers.",
    "intro.emergency.title": "Emergency SOS",
    "intro.emergency.where": "Red SOS button, always visible in the bottom-right corner",
    "intro.emergency.desc": "For a real emergency. One tap shows Police, Medical, Fire, your Caretaker, and Neighbour numbers, ready to call immediately, plus a way to message your caretaker on WhatsApp.",
    "intro.askSmriti.title": "Ask Smriti",
    "intro.askSmriti.where": "Violet Ask Smriti button, bottom-left corner",
    "intro.askSmriti.desc": "Type or speak a question -- about the app, your day, or Alzheimer's care generally. It can look up your real tasks, people, and events, and can even add a new task or event for you. Works in English, Hindi, or Hinglish.",
    "assistant.title": "Ask Smriti",
    "assistant.subtitle": "Ask about the app, your day, or Alzheimer's care in general.",
    "assistant.listening": "Listening…",
    "assistant.inputPlaceholder": "Type a question…",
    "assistant.disclaimer": "Not a substitute for medical advice. For anything urgent, use the SOS button or call your caretaker.",
    "assistant.greeting": "Hi, I'm Smriti Assistant. Ask me about the app, today's routine, or general questions about Alzheimer's care.",
    "assistant.thinking": "Thinking…",
    "emergency.sending": "Sending alert…",
    "emergency.alertSent": "Alert sent",
    "emergency.notified": "has been notified.",
    "emergency.caretakerNotified": "Your caretaker has been notified.",
    "emergency.moreAlertsPrefix": "You can send",
    "emergency.moreAlertsSuffix": "more alerts this hour if needed.",
    "emergency.couldNotSend": "Couldn't send that alert",
    "emergency.police": "Police",
    "emergency.medical": "Medical Help",
    "emergency.fire": "Fire",
    "emergency.caretaker": "Caretaker",
    "emergency.neighbour": "Neighbour",
    "emergency.notSetYet": "Not set yet",
    "emergency.call": "Call",
    "emergency.message": "Message",
    "emergency.addInProfile": "Add in Profile",
    "form.task": "Task",
    "form.taskPlaceholder": "e.g. Morning medication, Bathing, Lunch",
    "form.from": "From",
    "form.to": "To",
    "form.cancel": "Cancel",
    "form.saveTask": "Save task",
    "form.event": "Event",
    "form.eventPlaceholder": "e.g. Dr. Mehta – check-up, Grandson's birthday",
    "form.date": "Date",
    "form.time": "Time",
    "form.saveEvent": "Save event",
    "objects.whatIsIt": "What is it?",
    "objects.namePlaceholder": "e.g. Party coat, Insurance file",
    "objects.whereDidYouPutIt": "Where did you put it?",
    "objects.locationPlaceholder": "e.g. Upper section of almirah, Kitchen cupboard",
    "objects.retakePhoto": "Retake photo",
    "objects.save": "Save",
    "quiz.modalTitle": "Quiz & Games",
    "quiz.modalSubtitle": "A fresh set of questions every day — answer to earn points.",
    "history.analyze": "Analyze",
    "history.play": "Play",
    "landing.eyebrow": "A memory care companion",
    "landing.title1": "Some connections fade.",
    "landing.title2": "We help you hold on to them.",
    "landing.sub": "Smriti helps people living with Alzheimer's stay oriented, safe and engaged — and gives the people caring for them one clear place to keep watch, day to day.",
    "landing.loginBtn": "Log in with face scan",
    "landing.registerBtn": "Let's cure u — register",
    "landing.howSmritiHelps": "How Smriti helps",
    "landing.feature1.title": "Memory aids",
    "landing.feature1.desc": "Daily routines, medication reminders, and a photo memory bank of family and friends, ready to recall on request.",
    "landing.feature2.title": "Gentle exercises",
    "landing.feature2.desc": "Short recall games and word association tasks that adapt in difficulty, designed to keep the mind engaged, not overwhelmed.",
    "landing.feature3.title": "Safety & oversight",
    "landing.feature3.desc": "An emergency contact always one tap away, and a caretaker dashboard that shows routine adherence at a glance.",
    "landing.feature4.title": "Face-scan access",
    "landing.feature4.desc": "No passwords to forget. A quick face scan gets the patient straight into their own dashboard.",
    "landing.readyTitle": "Ready to begin?",
    "landing.readySub": "Registration takes about five minutes and covers both the patient and their caretaker.",
    "landing.haveAccount": "I already have an account",
    "dashboard.welcome": "Welcome,",
    "dashboard.back": "back",
    "dashboard.welcomeCaretakerOf": "Welcome — caretaker of",
    "dashboard.yourPatient": "your patient",
    "brand.smriti": "Smriti",
    "enum.male": "Male",
    "enum.female": "Female",
    "enum.other": "Other",
    "enum.shortTerm": "Short-term",
    "enum.longTerm": "Long-term",
    "enum.both": "Both",
    "enum.family": "Family",
    "enum.friend": "Friend",
    "enum.relative": "Relative",
    "cond.hearing": "Hearing impairment",
    "cond.speech": "Speech impairment",
    "cond.mobility": "Mobility impairment",
    "cond.vision": "Vision impairment",
    "cond.diabetes": "Diabetes",
    "cond.hypertension": "Hypertension",
    "reg.pageTitle": "Let's cure u",
    "reg.intro": "Tell us about the patient and their caretaker. This takes about five minutes.",
    "reg.patientHint": "Basic information about the person living with memory loss.",
    "reg.caretakerHint": "Who's looking after the patient day to day.",
    "reg.fullName": "Full name",
    "reg.age": "Age",
    "reg.gender": "Gender",
    "reg.memoryLossType": "Type of memory loss",
    "reg.onsetDate": "Date the disease started",
    "reg.underObservation": "Is the patient currently under professional observation?",
    "reg.facilityLocation": "Hospital / facility location",
    "reg.homeAddress": "Home address",
    "reg.connectionType": "What best describes the connection?",
    "reg.hoursAvailable": "Hours available with patient in 24h (1–24)",
    "reg.phoneNumber": "Phone number",
    "reg.relationWithPatient": "Relation with patient",
    "reg.caretakerAddress": "Caretaker's address",
    "reg.sameAsPatient": "Same as patient",
    "reg.differentLocation": "Different location",
    "reg.yes": "Yes",
    "reg.no": "No",
    "reg.name": "Name",
    "reg.howLongKnown": "How long has the patient known them?",
    "login.welcomeBack": "Welcome back",
    "login.subtext": "Scan your face to enter the patient dashboard.",
    "login.patientTab": "Patient",
    "login.caretakerTab": "Caretaker",
    "login.scanBtn": "Scan and log in",
    "login.newHere": "New here?",
    "login.registerInstead": "Register instead",
    "profile.photo": "Profile photo",
    "profile.patientDetails": "Patient details",
    "profile.editableDetails": "Editable details",
    "profile.caretakerDetails": "Caretaker details",
    "profile.changeCaretaker": "Change caretaker",
    "profile.changePhoto": "Change photo",
    "profile.registerNewCaretaker": "Register a new caretaker",
    "profile.unusualActivities": "Unusual repeated activities",
    "profile.relationToPatient": "Relation to patient",
    "profile.otherConditions": "Other conditions",
    "profile.contactNumber": "Contact number",
    "profile.diseaseOnset": "Disease onset",
    "profile.subtitle": "View and update patient & caretaker details.",
    "profile.backToDashboard": "Back to dashboard",
    "recognize.searchPlaceholder": "Search by name, relation, or connection…",
    "recognize.backToScan": "Back to scan",
    "reg.relation": "Relation",
    "location.nearbyHospital": "Hospital",
    "location.nearbyPharmacy": "Pharmacy",
    "location.nearbyPolice": "Police",
    "chart.byGame": "By game",
    "chart.byGameSubtitle": "Accuracy per game, last 7 days",
    "chart.noGamesYet": "No games played in the last 7 days yet.",
    "nav.logout": "Log out",
  },
  hi: {
    "dashboard.subGreeting": "\u0906\u092a\u0915\u0947 \u0926\u093f\u0928 \u0915\u0940 \u090f\u0915 \u091d\u0932\u0915\u0964",
    "nav.profile": "\u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932", "nav.quizGames": "\u0915\u094d\u0935\u093f\u091c\u093c \u0914\u0930 \u0917\u0947\u092e\u094d\u0938",
    "nav.emergency": "\u0906\u092a\u093e\u0924\u0915\u093e\u0932\u0940\u0928 \u0938\u0939\u093e\u092f\u0924\u093e", "nav.sos": "\u090f\u0938\u0913\u090f\u0938",
    "nav.knowApp": "\u0910\u092a \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u091c\u093e\u0928\u0947\u0902", "nav.askSmriti": "\u0938\u094d\u092e\u0943\u0924\u093f \u0938\u0947 \u092a\u0942\u091b\u0947\u0902",
    "stat.tasksToday": "\u0906\u091c \u092a\u0942\u0930\u0947 \u0915\u093f\u090f \u0917\u090f \u0915\u093e\u0930\u094d\u092f",
    "stat.quizGamesWeek": "\u0907\u0938 \u0938\u092a\u094d\u0924\u093e\u0939 \u0915\u094d\u0935\u093f\u091c\u093c \u0914\u0930 \u0917\u0947\u092e\u094d\u0938 \u0938\u091f\u0940\u0915\u0924\u093e \u2014 \u0916\u0947\u0932\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u091f\u0948\u092a \u0915\u0930\u0947\u0902",
    "panel.timetable": "\u0906\u091c \u0915\u0940 \u0938\u092e\u092f-\u0938\u093e\u0930\u0923\u0940", "panel.events": "\u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u0918\u091f\u0928\u093e\u090f\u0902 \u0914\u0930 \u0924\u093e\u0930\u0940\u0916\u0947\u0902",
    "panel.location": "\u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u0938\u094d\u0925\u093e\u0928", "panel.findThings": "\u092e\u0947\u0930\u0940 \u091a\u0940\u091c\u093c\u0947\u0902 \u0922\u0942\u0902\u0922\u0947\u0902",
    "panel.recognizePerson": "\u0935\u094d\u092f\u0915\u094d\u0924\u093f \u0915\u094b \u092a\u0939\u091a\u093e\u0928\u0947\u0902", "intro.title": "\u0910\u092a \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902 \u091c\u093e\u0928\u0947\u0902",
    "stat.allDone": "सब पूरा",
    "stat.left": "बाकी",
    "stat.noTasksYet": "अभी कोई कार्य नहीं",
    "stat.noneScheduled": "कुछ भी तय नहीं",
    "stat.nothingLeftToday": "आज कुछ बाकी नहीं",
    "stat.quizLabel": "क्विज़",
    "stat.gamesLabel": "गेम्स",
    "stat.pts": "अंक",
    "stat.noDataYet": "अभी डेटा नहीं",
    "stat.upcomingEvent": "आगामी घटना",
    "stat.nextTask": "अगला कार्य",
    "timetable.empty": "अभी कोई कार्य नहीं — दैनिक दिनचर्या बनाने के लिए 'कार्य जोड़ें' दबाएँ।",
    "events.empty": "अभी कोई घटना नहीं — नियुक्तियाँ, जन्मदिन आदि जोड़ने के लिए 'घटना जोड़ें' दबाएँ।",
    "camera.live": "कैमरा चालू है — अपना चेहरा बीच में रखें, फिर स्कैन दबाएँ।",
    "camera.permissionNeeded": "जारी रखने के लिए कैमरे की अनुमति चाहिए। कृपया अनुमति दें।",
    "objects.cameraLive": "कैमरा चालू है — वस्तु को बीच में रखें, फिर फ़ोटो लें दबाएँ।",
    "location.getting": "वर्तमान स्थान प्राप्त हो रहा है…",
    "location.accurateTo": "सटीकता लगभग",
    "location.phonesNote": "असली जीपीएस वाले फ़ोन लैपटॉप से कहीं अधिक सटीक होते हैं।",
    "location.lastUpdated": "अंतिम बार अपडेट",
    "location.errorGeneric": "स्थान प्राप्त नहीं हो सका।",
    "location.errorDenied": "स्थान की अनुमति नहीं दी गई — लाइव स्थान देखने के लिए अनुमति दें।",
    "location.errorUnavailable": "अभी स्थान उपलब्ध नहीं है।",
    "location.errorTimeout": "स्थान का अनुरोध समय पर पूरा नहीं हुआ।",
    "location.notAvailable": "उपलब्ध नहीं",
    "location.notSupported": "इस डिवाइस/ब्राउज़र पर जियोलोकेशन उपलब्ध नहीं है।",
    "location.refresh": "लाइव स्थान ताज़ा करें",
    "trend.green": "सुधार हो रहा है",
    "trend.yellow": "स्थिर",
    "trend.red": "ध्यान देने की ज़रूरत",
    "chart.pointsThisWeek": "इस सप्ताह अर्जित अंक (क्विज़ + गेम्स)",
    "chart.noActivityWeek": "इस सप्ताह अभी कोई गतिविधि नहीं",
    "chart.pointsLast8Weeks": "पिछले 8 सप्ताह के अंक (क्विज़ + गेम्स)",
    "chart.noActivityMonth": "इस महीने अभी कोई गतिविधि नहीं",
    "chart.accuracySpeed": "सटीकता + गति एक साथ",
    "chart.noActivityWeekQG": "इस सप्ताह क्विज़ या गेम की कोई गतिविधि नहीं",
    "section.progress": "प्रगति",
    "section.schedule": "समय-सारणी",
    "section.safety": "सुरक्षा और त्वरित कार्रवाई",
    "chart.title": "स्मृति और याद प्रगति",
    "chart.subtitle": "क्विज़ परिणामों के आधार पर",
    "chart.shortTerm": "अल्पकालिक",
    "chart.longTerm": "दीर्घकालिक",
    "chart.brainAccuracy": "मस्तिष्क सटीकता",
    "recognize.subtitle": "कैमरे को उनकी ओर करें और स्कैन दबाएँ।",
    "recognize.searchPeople": "लोग खोजें",
    "recognize.scanBtn": "इस व्यक्ति को स्कैन करें",
    "timetable.subtitle": "दैनिक दिनचर्या — जोड़ें, संपादित करें, और हर कार्य की पुष्टि करें।",
    "timetable.addTask": "कार्य जोड़ें",
    "events.subtitle": "एक बार के अनुस्मारक — नियुक्तियाँ, जन्मदिन और अधिक।",
    "events.addEvent": "घटना जोड़ें",
    "objects.subtitle": "वस्तु की फ़ोटो लें और नोट करें कि आपने उसे कहाँ रखा।",
    "objects.search": "खोजें",
    "objects.takePhoto": "फ़ोटो लें",
    "common.loading": "लोड हो रहा है…",
    "quiz.nextIn": "अगला",
    "quiz.level": "स्तर:",
    "quiz.catchingUpOn": "पुनः पूरा कर रहे हैं",
    "diff.easy": "आसान",
    "diff.medium": "मध्यम",
    "diff.hard": "कठिन",
    "diff.personal": "व्यक्तिगत",
    "diff.orientation": "अभिविन्यास",
    "dayDetail.notAttempted": "प्रयास नहीं किया",
    "dayDetail.correct": "सही",
    "dayDetail.incorrect": "गलत",
    "dayDetail.correctAnswer": "सही उत्तर:",
    "quiz.notQuite": "ठीक नहीं — सही उत्तर था",
    "game.notAvailable": "अभी उपलब्ध नहीं",
    "game.alreadyCompleted": "आपने यह पहले ही पूरा कर लिया — शानदार!",
    "game.alreadyPlayed": "आपने यह राउंड पहले ही खेल लिया है।",
    "game.tracedPrefix": "आपने बनाया",
    "game.tracedSuffix": "! शानदार।",
    "game.wonderful": "शानदार! आपने अर्जित किए",
    "game.point": "अंक",
    "game.points": "अंक",
    "game.notQuitePrefix": "ठीक नहीं — उत्तर था",
    "game.niceTry": "अच्छा प्रयास!",
    "game.goodEffort": "अच्छा प्रयास! अगले पर चलते हैं।",
    "quiz.correctFeedback": "सही! आपने अर्जित किए",
    "quiz.pointsWord": "अंक",
    "quiz.of": "में से",
    "quiz.correctWord": "सही",
    "quiz.comeBack": "वापस आएं",
    "quiz.tomorrow": "कल",
    "quiz.nextWeek": "अगले सप्ताह",
    "quiz.forNewSet": "एक नए सेट के लिए",
    "game.pointsExclaim": "अंक!",
    "game.seeYouTomorrow": "एक नए खेल के लिए अगले रविवार मिलते हैं!",
    "quiz.tabDaily": "आज की प्रश्नोत्तरी",
    "quiz.tabGame": "आज का खेल",
    "quiz.historyBtn": "इतिहास",
    "quiz.doneForNow": "अभी के लिए हो गया",
    "history.title": "दैनिक इतिहास",
    "history.subtitle": "देखें कि आपने कौन से दिन पूरे किए — और छूटे हुए दिन पूरे करें।",
    "quiz.backToQuiz": "प्रश्नोत्तरी पर वापस जाएं",
    "dayDetail.legend": "हरा = सही, लाल = गलत, ग्रे = प्रयास नहीं किया।",
    "quiz.quizWord": "प्रश्नोत्तरी",
    "dayDetail.backToHistory": "इतिहास पर वापस जाएं",
    "intro.subtitle": "स्मृति में मौजूद हर चीज़, वह किसलिए है, और उसका उपयोग कैसे करें।",
    "intro.gotIt": "समझ गया",
    "intro.recognizePerson.title": "व्यक्ति को पहचानें",
    "intro.recognizePerson.where": "डैशबोर्ड, आपके प्रगति चार्ट के पास",
    "intro.recognizePerson.desc": "किसी की ओर कैमरा करें और स्कैन टैप करें, उनका नाम, आपसे रिश्ता, और कोई भी स्मृति नोट देखने के लिए। यदि उन्हें अभी तक पहचाना नहीं गया है, तो आप उन्हें वहीं फोटो के साथ जोड़ सकते हैं। लोग खोजें टैप करके सभी पंजीकृत लोगों को असली फोटो के साथ देखें।",
    "intro.timetable.title": "आज की समय-सारणी",
    "intro.timetable.where": "डैशबोर्ड, शेड्यूल अनुभाग",
    "intro.timetable.desc": "आपकी दैनिक दिनचर्या -- भोजन, दवा, स्नान, और अधिक। हर कार्य का एक समय होता है, ध्वनि अनुस्मारक के साथ। पूरा करने पर कन्फर्म टैप करें, टिक लगेगा; चूकने पर क्रॉस दिखेगा। कभी भी कार्य जोड़, संपादित, या हटा सकते हैं।",
    "intro.events.title": "महत्वपूर्ण घटनाएँ",
    "intro.events.where": "डैशबोर्ड, समय-सारणी के बगल में",
    "intro.events.desc": "एक बार की नियुक्तियाँ, जन्मदिन, या अन्य तिथियाँ जोड़ें। चुनी गई तिथि और समय पर ध्वनि अलर्ट मिलेगा। देखने के बाद ओके टैप करें, घटना अपने आप साफ हो जाएगी।",
    "intro.quizGames.title": "क्विज़ और गेम्स",
    "intro.quizGames.where": "शीर्ष पर क्विज़ और गेम्स बटन, या साप्ताहिक स्कोर कार्ड टैप करें",
    "intro.quizGames.desc": "मन को सक्रिय रखने के लिए हर दिन एक छोटी प्रश्नोत्तरी और अलग मिनी-गेम। प्रदर्शन के अनुसार प्रश्न आसान या कठिन होते हैं। कौन से दिन पूरे किए देखने के लिए इतिहास बटन का उपयोग करें, छूटे दिन पूरे करें।",
    "intro.findThings.title": "मेरी चीज़ें ढूंढें",
    "intro.findThings.where": "डैशबोर्ड, वर्तमान स्थान के बगल में",
    "intro.findThings.desc": "किसी वस्तु की तस्वीर लें और नोट करें कि कहाँ रखा है, जैसे पार्टी कोट अलमारी की ऊपरी शेल्फ में। बाद में खोजें टैप करके असली फोटो के साथ ब्राउज़ करें, या नाम या स्थान से खोजें।",
    "intro.location.title": "वर्तमान स्थान",
    "intro.location.where": "डैशबोर्ड",
    "intro.location.desc": "आपके डिवाइस के जीपीएस से लाइव मानचित्र पर आपका वास्तविक स्थान दिखाता है। इसे अपडेट करने के लिए लाइव स्थान रीफ्रेश करें टैप करें -- देखभालकर्ता के लिए उपयोगी।",
    "intro.profile.title": "प्रोफ़ाइल",
    "intro.profile.where": "शीर्ष पर प्रोफ़ाइल बटन",
    "intro.profile.desc": "आपका विवरण, देखभालकर्ता की जानकारी, और पड़ोसी का फोन नंबर। इसे अद्यतन रखें ताकि आपातकालीन स्क्रीन में सही नंबर हों।",
    "intro.emergency.title": "आपातकालीन एसओएस",
    "intro.emergency.where": "लाल एसओएस बटन, नीचे दाएं कोने में",
    "intro.emergency.desc": "वास्तविक आपातकाल के लिए। एक टैप पुलिस, चिकित्सा, दमकल, देखभालकर्ता, पड़ोसी नंबर दिखाता है, तुरंत कॉल के लिए तैयार, व्हाट्सएप संदेश भी।",
    "intro.askSmriti.title": "स्मृति से पूछें",
    "intro.askSmriti.where": "बैंगनी स्मृति से पूछें बटन, नीचे बाएं कोने में",
    "intro.askSmriti.desc": "एक प्रश्न टाइप करें या बोलें -- ऐप, दिन, या अल्जाइमर देखभाल के बारे में। यह वास्तविक कार्यों, लोगों, घटनाओं को देख सकता है, नया कार्य भी जोड़ सकता है। अंग्रेजी, हिंदी, या हिंग्लिश में काम करता है।",
    "assistant.title": "स्मृति से पूछें",
    "assistant.subtitle": "ऐप, आपके दिन, या सामान्य रूप से अल्जाइमर देखभाल के बारे में पूछें।",
    "assistant.listening": "सुन रहा हूँ…",
    "assistant.inputPlaceholder": "प्रश्न टाइप करें…",
    "assistant.disclaimer": "यह चिकित्सा सलाह का विकल्प नहीं है। तत्काल आवश्यकता के लिए एसओएस बटन का उपयोग करें।",
    "assistant.greeting": "नमस्ते, मैं स्मृति सहायक हूँ। मुझसे ऐप, आज की दिनचर्या, या अल्जाइमर देखभाल के बारे में पूछें।",
    "assistant.thinking": "सोच रहा हूँ…",
    "emergency.sending": "अलर्ट भेजा जा रहा है…",
    "emergency.alertSent": "अलर्ट भेजी गई",
    "emergency.notified": "को सूचित कर दिया गया है।",
    "emergency.caretakerNotified": "आपके देखभालकर्ता को सूचित कर दिया गया है।",
    "emergency.moreAlertsPrefix": "आप भेज सकते हैं",
    "emergency.moreAlertsSuffix": "इस घंटे और अलर्ट भेज सकते हैं, यदि आवश्यक हो।",
    "emergency.couldNotSend": "वह अलर्ट नहीं भेजी जा सकी",
    "emergency.police": "पुलिस",
    "emergency.medical": "चिकित्सा सहायता",
    "emergency.fire": "दमकल",
    "emergency.caretaker": "देखभालकर्ता",
    "emergency.neighbour": "पड़ोसी",
    "emergency.notSetYet": "अभी सेट नहीं है",
    "emergency.call": "कॉल करें",
    "emergency.message": "संदेश",
    "emergency.addInProfile": "प्रोफ़ाइल में जोड़ें",
    "form.task": "कार्य",
    "form.taskPlaceholder": "जैसे सुबह की दवा, स्नान, दोपहर का भोजन",
    "form.from": "से",
    "form.to": "तक",
    "form.cancel": "रद्द करें",
    "form.saveTask": "कार्य सहेजें",
    "form.event": "घटना",
    "form.eventPlaceholder": "जैसे डॉ. मेहता – जांच, पोते का जन्मदिन",
    "form.date": "तारीख",
    "form.time": "समय",
    "form.saveEvent": "घटना सहेजें",
    "objects.whatIsIt": "यह क्या है?",
    "objects.namePlaceholder": "जैसे पार्टी कोट, बीमा फ़ाइल",
    "objects.whereDidYouPutIt": "आपने इसे कहाँ रखा?",
    "objects.locationPlaceholder": "जैसे अलमारी का ऊपरी भाग, रसोई कैबिनेट",
    "objects.retakePhoto": "फ़ोटो फिर से लें",
    "objects.save": "सहेजें",
    "quiz.modalTitle": "क्विज़ और गेम्स",
    "quiz.modalSubtitle": "हर दिन प्रश्नों का एक नया सेट — अंक अर्जित करने के लिए उत्तर दें।",
    "history.analyze": "विश्लेषण करें",
    "history.play": "खेलें",
    "landing.eyebrow": "एक स्मृति देखभाल साथी",
    "landing.title1": "कुछ रिश्ते धुंधले हो जाते हैं।",
    "landing.title2": "हम आपको उन्हें थामे रखने में मदद करते हैं।",
    "landing.sub": "स्मृति अल्जाइमर के साथ जी रहे लोगों को उन्मुख, सुरक्षित और सक्रिय रहने में मदद करती है — और उनकी देखभाल करने वालों को हर दिन नज़र रखने के लिए एक स्पष्ट स्थान देती है।",
    "landing.loginBtn": "फेस स्कैन से लॉगिन करें",
    "landing.registerBtn": "आइए इलाज करें — पंजीकरण करें",
    "landing.howSmritiHelps": "स्मृति कैसे मदद करती है",
    "landing.feature1.title": "स्मृति सहायक",
    "landing.feature1.desc": "दैनिक दिनचर्या, दवा अनुस्मारक, और परिवार व दोस्तों का एक फोटो स्मृति बैंक, अनुरोध पर याद करने के लिए तैयार।",
    "landing.feature2.title": "सौम्य अभ्यास",
    "landing.feature2.desc": "छोटे स्मरण खेल और शब्द संगति कार्य जो कठिनाई में अनुकूलित होते हैं, मन को व्यस्त रखने के लिए डिज़ाइन किए गए, अभिभूत नहीं।",
    "landing.feature3.title": "सुरक्षा और निगरानी",
    "landing.feature3.desc": "एक आपातकालीन संपर्क हमेशा एक टैप दूर, और एक देखभालकर्ता डैशबोर्ड जो एक नज़र में दिनचर्या पालन दिखाता है।",
    "landing.feature4.title": "फेस-स्कैन एक्सेस",
    "landing.feature4.desc": "भूलने के लिए कोई पासवर्ड नहीं। एक त्वरित फेस स्कैन रोगी को सीधे उनके अपने डैशबोर्ड में ले जाता है।",
    "landing.readyTitle": "शुरू करने के लिए तैयार?",
    "landing.readySub": "पंजीकरण में लगभग पाँच मिनट लगते हैं और इसमें रोगी और उनके देखभालकर्ता दोनों शामिल हैं।",
    "landing.haveAccount": "मेरे पास पहले से एक खाता है",
    "dashboard.welcome": "स्वागत है,",
    "dashboard.back": "वापस",
    "dashboard.welcomeCaretakerOf": "स्वागत है — इनके देखभालकर्ता",
    "dashboard.yourPatient": "आपका रोगी",
    "brand.smriti": "स्मृति",
    "enum.male": "पुरुष",
    "enum.female": "महिला",
    "enum.other": "अन्य",
    "enum.shortTerm": "अल्पकालिक",
    "enum.longTerm": "दीर्घकालिक",
    "enum.both": "दोनों",
    "enum.family": "परिवार",
    "enum.friend": "मित्र",
    "enum.relative": "रिश्तेदार",
    "cond.hearing": "श्रवण दोष",
    "cond.speech": "वाणी दोष",
    "cond.mobility": "गतिशीलता दोष",
    "cond.vision": "दृष्टि दोष",
    "cond.diabetes": "मधुमेह",
    "cond.hypertension": "उच्च रक्तचाप",
    "reg.pageTitle": "आइए इलाज करें",
    "reg.intro": "हमें रोगी और उनके देखभालकर्ता के बारे में बताएं। इसमें लगभग पाँच मिनट लगते हैं।",
    "reg.patientHint": "स्मृति हानि के साथ जी रहे व्यक्ति के बारे में बुनियादी जानकारी।",
    "reg.caretakerHint": "कौन रोगी की दिन-प्रतिदिन देखभाल कर रहा है।",
    "reg.fullName": "पूरा नाम",
    "reg.age": "आयु",
    "reg.gender": "लिंग",
    "reg.memoryLossType": "स्मृति हानि का प्रकार",
    "reg.onsetDate": "रोग शुरू होने की तारीख",
    "reg.underObservation": "क्या रोगी वर्तमान में पेशेवर निगरानी में है?",
    "reg.facilityLocation": "अस्पताल / सुविधा स्थान",
    "reg.homeAddress": "घर का पता",
    "reg.connectionType": "संबंध का सबसे अच्छा वर्णन क्या है?",
    "reg.hoursAvailable": "24 घंटे में रोगी के साथ उपलब्ध घंटे (1–24)",
    "reg.phoneNumber": "फ़ोन नंबर",
    "reg.relationWithPatient": "रोगी के साथ संबंध",
    "reg.caretakerAddress": "देखभालकर्ता का पता",
    "reg.sameAsPatient": "रोगी के समान",
    "reg.differentLocation": "अलग स्थान",
    "reg.yes": "हाँ",
    "reg.no": "नहीं",
    "reg.name": "नाम",
    "reg.howLongKnown": "रोगी उन्हें कब से जानता है?",
    "login.welcomeBack": "वापसी पर स्वागत है",
    "login.subtext": "रोगी डैशबोर्ड में प्रवेश करने के लिए अपना चेहरा स्कैन करें।",
    "login.patientTab": "रोगी",
    "login.caretakerTab": "देखभालकर्ता",
    "login.scanBtn": "स्कैन करें और लॉगिन करें",
    "login.newHere": "यहाँ नए हैं?",
    "login.registerInstead": "इसके बजाय पंजीकरण करें",
    "profile.photo": "प्रोफ़ाइल फ़ोटो",
    "profile.patientDetails": "रोगी विवरण",
    "profile.editableDetails": "संपादन योग्य विवरण",
    "profile.caretakerDetails": "देखभालकर्ता विवरण",
    "profile.changeCaretaker": "देखभालकर्ता बदलें",
    "profile.changePhoto": "फ़ोटो बदलें",
    "profile.registerNewCaretaker": "एक नया देखभालकर्ता पंजीकृत करें",
    "profile.unusualActivities": "असामान्य दोहराई जाने वाली गतिविधियाँ",
    "profile.relationToPatient": "रोगी से संबंध",
    "profile.otherConditions": "अन्य स्थितियाँ",
    "profile.contactNumber": "संपर्क नंबर",
    "profile.diseaseOnset": "रोग की शुरुआत",
    "profile.subtitle": "रोगी और देखभालकर्ता का विवरण देखें और अपडेट करें।",
    "profile.backToDashboard": "डैशबोर्ड पर वापस जाएं",
    "recognize.searchPlaceholder": "नाम, रिश्ते, या संबंध से खोजें…",
    "recognize.backToScan": "स्कैन पर वापस जाएं",
    "reg.relation": "संबंध",
    "location.nearbyHospital": "अस्पताल",
    "location.nearbyPharmacy": "फार्मेसी",
    "location.nearbyPolice": "पुलिस",
    "chart.byGame": "खेल के अनुसार",
    "chart.byGameSubtitle": "प्रति खेल सटीकता, पिछले 7 दिन",
    "chart.noGamesYet": "पिछले 7 दिनों में कोई खेल नहीं खेला गया।",
    "nav.logout": "लॉग आउट",
  },
  ta: {
    "dashboard.subGreeting": "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbe\u0bb3\u0bbf\u0ba9\u0bcd \u0b92\u0bb0\u0bc1 \u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8.",
    "nav.profile": "\u0b9a\u0bc1\u0baf\u0bb5\u0bbf\u0bb5\u0bb0\u0bae\u0bcd", "nav.quizGames": "\u0bb5\u0bbf\u0ba9\u0bbe\u0b9f\u0bbf \u0bb5\u0bbf\u0ba9\u0bbe & \u0bb5\u0bbf\u0bb3\u0bc8\u0baf\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",
    "nav.emergency": "\u0b85\u0bb5\u0b9a\u0bb0 \u0b89\u0ba4\u0bb5\u0bbf", "nav.sos": "\u0b8e\u0bb8\u0bcd\u0b93\u0b8e\u0bb8\u0bcd",
    "nav.knowApp": "\u0b9a\u0bc6\u0baf\u0bb2\u0bbf \u0baa\u0bb1\u0bcd\u0bb1\u0bbf \u0b85\u0bb1\u0bbf\u0b95", "nav.askSmriti": "\u0bb8\u0bcd\u0bae\u0bcd\u0bb0\u0bbf\u0ba4\u0bbf\u0baf\u0bbf\u0b9f\u0bae\u0bcd \u0b95\u0bc7\u0bb3\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    "stat.tasksToday": "\u0b87\u0ba9\u0bcd\u0bb1\u0bc1 \u0bae\u0bc1\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0baa\u0ba3\u0bbf\u0b95\u0bb3\u0bcd",
    "stat.quizGamesWeek": "இந்த வாரம் வினாடி வினா & விளையாட்டு துல்லியம் — விளையாட தட்டவும்",
    "panel.timetable": "இன்றைய நேர அட்டவணை", "panel.events": "முக்கியமான நிகழ்வுகள் & தேதிகள்",
    "panel.location": "\u0ba4\u0bb1\u0bcd\u0baa\u0bcb\u0ba4\u0bc8\u0baf \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0b9f\u0bae\u0bcd", "panel.findThings": "\u0b8e\u0ba9\u0bcd \u0baa\u0bca\u0bb0\u0bc1\u0b9f\u0bcd\u0b95\u0bb3\u0bc8\u0b95\u0bcd \u0b95\u0ba3\u0bcd\u0b9f\u0bb1\u0bbf\u0baf\u0bb5\u0bc1\u0bae\u0bcd",
    "panel.recognizePerson": "\u0b92\u0bb0\u0bc1 \u0ba8\u0baa\u0bb0\u0bc8 \u0b85\u0b9f\u0bc8\u0baf\u0bbe\u0bb3\u0bae\u0bcd \u0b95\u0bbe\u0ba3\u0bb5\u0bc1\u0bae\u0bcd", "intro.title": "\u0b9a\u0bc6\u0baf\u0bb2\u0bbf \u0baa\u0bb1\u0bcd\u0bb1\u0bbf \u0b85\u0bb1\u0bbf\u0b95",
    "stat.allDone": "அனைத்தும் முடிந்தது",
    "stat.left": "மீதம்",
    "stat.noTasksYet": "இதுவரை பணிகள் இல்லை",
    "stat.noneScheduled": "எதுவும் திட்டமிடப்படவில்லை",
    "stat.nothingLeftToday": "இன்று எதுவும் மீதமில்லை",
    "stat.quizLabel": "வினாடி வினா",
    "stat.gamesLabel": "விளையாட்டுகள்",
    "stat.pts": "புள்ளிகள்",
    "stat.noDataYet": "இதுவரை தரவு இல்லை",
    "stat.upcomingEvent": "வரவிருக்கும் நிகழ்வு",
    "stat.nextTask": "அடுத்த பணி",
    "timetable.empty": "இதுவரை பணிகள் இல்லை — தினசரி நடைமுறையை உருவாக்க பணி சேர் என்பதைத் தட்டவும்.",
    "events.empty": "இதுவரை நிகழ்வுகள் இல்லை — சந்திப்புகள், பிறந்தநாட்கள் சேர்க்க நிகழ்வு சேர் என்பதைத் தட்டவும்.",
    "camera.live": "கேமரா இயங்குகிறது — உங்கள் முகத்தை நடுவில் வையுங்கள், பின் ஸ்கேன் தட்டவும்.",
    "camera.permissionNeeded": "தொடர கேமரா அனுமதி தேவை. தயவுசெய்து அனுமதி வழங்கவும்.",
    "objects.cameraLive": "கேமரா இயங்குகிறது — பொருளை நடுவில் வையுங்கள், பின் புகைப்படம் எடு தட்டவும்.",
    "location.getting": "தற்போதைய இருப்பிடம் பெறப்படுகிறது…",
    "location.accurateTo": "துல்லியம் சுமார்",
    "location.phonesNote": "உண்மையான ஜிபிஎஸ் கொண்ட மொபைல்கள் லேப்டாப்பை விட மிகவும் துல்லியமானவை.",
    "location.lastUpdated": "கடைசியாக புதுப்பிக்கப்பட்டது",
    "location.errorGeneric": "இருப்பிடத்தைப் பெற முடியவில்லை.",
    "location.errorDenied": "இருப்பிட அனுமதி மறுக்கப்பட்டது — நேரடி இருப்பிடத்தைக் காண அனுமதி வழங்கவும்.",
    "location.errorUnavailable": "இப்போது இருப்பிடம் கிடைக்கவில்லை.",
    "location.errorTimeout": "இருப்பிடக் கோரிக்கை நேரம் முடிந்தது.",
    "location.notAvailable": "கிடைக்கவில்லை",
    "location.notSupported": "இந்த சாதனத்தில்/உலாவியில் இருப்பிடச் சேவை கிடைக்கவில்லை.",
    "location.refresh": "நேரடி இருப்பிடத்தைப் புதுப்பிக்கவும்",
    "trend.green": "முன்னேற்றம்",
    "trend.yellow": "நிலையானது",
    "trend.red": "கவனம் தேவை",
    "chart.pointsThisWeek": "இந்த வாரம் பெற்ற புள்ளிகள் (வினாடி வினா + விளையாட்டு)",
    "chart.noActivityWeek": "இந்த வாரம் இதுவரை செயல்பாடு இல்லை",
    "chart.pointsLast8Weeks": "கடந்த 8 வாரங்களின் புள்ளிகள் (வினாடி வினா + விளையாட்டு)",
    "chart.noActivityMonth": "இந்த மாதம் இதுவரை செயல்பாடு இல்லை",
    "chart.accuracySpeed": "துல்லியம் + வேகம் இணைந்தது",
    "chart.noActivityWeekQG": "இந்த வாரம் வினாடி வினா அல்லது விளையாட்டு செயல்பாடு இல்லை",
    "section.progress": "முன்னேற்றம்",
    "section.schedule": "அட்டவணை",
    "section.safety": "பாதுகாப்பு & விரைவு செயல்கள்",
    "chart.title": "நினைவு & நினைவுகூர்தல் முன்னேற்றம்",
    "chart.subtitle": "வினாடி வினா முடிவுகளின் அடிப்படையில்",
    "chart.shortTerm": "குறுகிய கால",
    "chart.longTerm": "நீண்ட கால",
    "chart.brainAccuracy": "மூளை துல்லியம்",
    "recognize.subtitle": "கேமராவை அவர்கள் பக்கம் காட்டி ஸ்கேன் தட்டவும்.",
    "recognize.searchPeople": "நபர்களைத் தேடு",
    "recognize.scanBtn": "இந்த நபரை ஸ்கேன் செய்யவும்",
    "timetable.subtitle": "தினசரி நடைமுறை — சேர்க்கவும், திருத்தவும், ஒவ்வொரு பணியையும் உறுதிப்படுத்தவும்.",
    "timetable.addTask": "பணி சேர்",
    "events.subtitle": "ஒரு முறை நினைவூட்டல்கள் — சந்திப்புகள், பிறந்தநாட்கள் மற்றும் பல.",
    "events.addEvent": "நிகழ்வு சேர்",
    "objects.subtitle": "ஒரு பொருளின் புகைப்படம் எடுத்து அதை எங்கே வைத்தீர்கள் என்று குறிப்பிடவும்.",
    "objects.search": "தேடு",
    "objects.takePhoto": "புகைப்படம் எடு",
    "common.loading": "ஏற்றுகிறது…",
    "quiz.nextIn": "அடுத்தது",
    "quiz.level": "நிலை:",
    "quiz.catchingUpOn": "மீட்டெடுக்கிறது",
    "diff.easy": "எளிது",
    "diff.medium": "நடுத்தரம்",
    "diff.hard": "கடினம்",
    "diff.personal": "தனிப்பட்ட",
    "diff.orientation": "நோக்குநிலை",
    "dayDetail.notAttempted": "முயற்சிக்கப்படவில்லை",
    "dayDetail.correct": "சரி",
    "dayDetail.incorrect": "தவறு",
    "dayDetail.correctAnswer": "சரியான பதில்:",
    "quiz.notQuite": "சரியில்லை — சரியான பதில்",
    "game.notAvailable": "இன்னும் கிடைக்கவில்லை",
    "game.alreadyCompleted": "இதை ஏற்கனவே முடித்துவிட்டீர்கள் — சிறப்பு!",
    "game.alreadyPlayed": "இந்த சுற்றை ஏற்கனவே விளையாடிவிட்டீர்கள்.",
    "game.tracedPrefix": "நீங்கள் வரைந்தீர்கள்",
    "game.tracedSuffix": "! சிறப்பு.",
    "game.wonderful": "அருமை! நீங்கள் பெற்றீர்கள்",
    "game.point": "புள்ளி",
    "game.points": "புள்ளிகள்",
    "game.notQuitePrefix": "சரியில்லை — பதில்",
    "game.niceTry": "நல்ல முயற்சி!",
    "game.goodEffort": "நல்ல முயற்சி! அடுத்ததற்குச் செல்லலாம்.",
    "quiz.correctFeedback": "சரி! நீங்கள் பெற்றீர்கள்",
    "quiz.pointsWord": "புள்ளிகள்",
    "quiz.of": "இல்",
    "quiz.correctWord": "சரி",
    "quiz.comeBack": "மீண்டும் வாருங்கள்",
    "quiz.tomorrow": "நாளை",
    "quiz.nextWeek": "அடுத்த வாரம்",
    "quiz.forNewSet": "புதிய தொகுப்புக்கு",
    "game.pointsExclaim": "புள்ளிகள்!",
    "game.seeYouTomorrow": "புதிய விளையாட்டிற்கு அடுத்த ஞாயிற்றுக்கிழமை சந்திப்போம்!",
    "quiz.tabDaily": "இன்றைய வினாடி வினா",
    "quiz.tabGame": "இன்றைய விளையாட்டு",
    "quiz.historyBtn": "வரலாறு",
    "quiz.doneForNow": "தற்போதைக்கு முடிந்தது",
    "history.title": "தினசரி வரலாறு",
    "history.subtitle": "எந்த நாட்களை முடித்தீர்கள் என்பதைப் பாருங்கள் — தவறியவற்றை முடிக்கவும்.",
    "quiz.backToQuiz": "வினாடி வினாவிற்குத் திரும்பு",
    "dayDetail.legend": "பச்சை = சரி, சிவப்பு = தவறு, சாம்பல் = முயற்சிக்கவில்லை.",
    "quiz.quizWord": "வினாடி வினா",
    "dayDetail.backToHistory": "வரலாற்றுக்குத் திரும்பு",
    "intro.subtitle": "ஸ்ம்ரிதியில் உள்ள அனைத்தும், அது எதற்காக, அதை எப்படி பயன்படுத்துவது.",
    "intro.gotIt": "புரிந்தது",
    "intro.recognizePerson.title": "ஒரு நபரை அடையாளம் காணவும்",
    "intro.recognizePerson.where": "டாஷ்போர்டு, உங்கள் முன்னேற்ற விளக்கப்படத்திற்கு அருகில்",
    "intro.recognizePerson.desc": "ஒருவரை நோக்கி கேமராவை காட்டி ஸ்கேன் தட்டி அவரது பெயர், உங்களுடனான உறவு, மற்றும் நினைவு குறிப்புகளைப் பார்க்கவும். இன்னும் அடையாளம் காணப்படவில்லை என்றால், அங்கேயே புகைப்படத்துடன் சேர்க்கலாம். நபர்களைத் தேடு தட்டி எல்லோரையும் உண்மையான புகைப்படங்களுடன் பார்க்கலாம்.",
    "intro.timetable.title": "இன்றைய நேர அட்டவணை",
    "intro.timetable.where": "டாஷ்போர்டு, அட்டவணை பிரிவு",
    "intro.timetable.desc": "உங்கள் தினசரி வழக்கம் -- உணவு, மருந்து, குளியல் மற்றும் பல. ஒவ்வொரு பணிக்கும் நேரம் உள்ளது, ஒலி நினைவூட்டல்களுடன். செய்தவுடன் உறுதிசெய் தட்டவும், டிக் குறியிடும்; தவறவிட்டால் குறுக்கு குறி காட்டும். எப்போதும் பணிகளைச் சேர்க்கலாம், திருத்தலாம், நீக்கலாம்.",
    "intro.events.title": "முக்கியமான நிகழ்வுகள்",
    "intro.events.where": "டாஷ்போர்டு, நேர அட்டவணைக்கு அருகில்",
    "intro.events.desc": "ஒரு முறை நியமனங்கள், பிறந்தநாள்கள், அல்லது தேதிகளைச் சேர்க்கவும். தேர்ந்தெடுத்த நாள் நேரத்தில் ஒலி எச்சரிக்கை கிடைக்கும். பார்த்தவுடன் சரி தட்டவும், நிகழ்வு தானாகவே அழிக்கப்படும்.",
    "intro.quizGames.title": "வினாடி வினா & விளையாட்டுகள்",
    "intro.quizGames.where": "மேலே உள்ள வினாடி வினா & விளையாட்டுகள் பொத்தான், அல்லது வாராந்திர ஸ்கோர் அட்டையைத் தட்டவும்",
    "intro.quizGames.desc": "மனதை செயலில் வைத்திருக்க ஒவ்வொரு நாளும் ஒரு வினாடி வினா, வேறுபட்ட மினி-கேம். செயல்திறனைப் பொறுத்து கேள்விகள் எளிதாகவோ கடினமாகவோ ஆகும். எந்த நாட்களை முடித்தீர்கள் எனப் பார்க்க வரலாறு பொத்தானைப் பயன்படுத்தி, தவறியவற்றை முடிக்கவும்.",
    "intro.findThings.title": "என் பொருட்களைக் கண்டறியவும்",
    "intro.findThings.where": "டாஷ்போர்டு, தற்போதைய இருப்பிடத்திற்கு அருகில்",
    "intro.findThings.desc": "ஒரு பொருளின் புகைப்படம் எடுத்து எங்கே வைத்தீர்கள் எனக் குறிக்கவும், பார்ட்டி கோட் அலமாரியின் மேல் அடுக்கில் போல. பின்னர் தேடு தட்டி உண்மையான புகைப்படங்களுடன் உலாவவும், அல்லது பெயர் இடத்தால் தேடவும்.",
    "intro.location.title": "தற்போதைய இருப்பிடம்",
    "intro.location.where": "டாஷ்போர்டு",
    "intro.location.desc": "உங்கள் சாதன GPS ஐப் பயன்படுத்தி நேரடி வரைபடத்தில் உண்மையான இருப்பிடத்தைக் காட்டுகிறது. புதுப்பிக்க நேரடி இருப்பிடத்தைப் புதுப்பிக்கவும் தட்டவும் -- பராமரிப்பாளருக்குப் பயனுள்ளது.",
    "intro.profile.title": "சுயவிவரம்",
    "intro.profile.where": "மேலே உள்ள சுயவிவரம் பொத்தான்",
    "intro.profile.desc": "உங்கள் விவரங்கள், பராமரிப்பாளர் தொடர்பு தகவல், அண்டை வீட்டார் எண். அவசரகால திரையில் சரியான எண்கள் இருக்க இதைப் புதுப்பியுங்கள்.",
    "intro.emergency.title": "அவசரகால எஸ்ஓஎஸ்",
    "intro.emergency.where": "சிவப்பு எஸ்ஓஎஸ் பொத்தான், கீழ்-வலது மூலையில்",
    "intro.emergency.desc": "உண்மையான அவசரநிலைக்கு. ஒரு தட்டல் காவல்துறை, மருத்துவம், தீயணைப்பு, பராமரிப்பாளர், அண்டை வீட்டார் எண்களைக் காட்டுகிறது, உடனடி அழைப்புக்குத் தயார், WhatsApp செய்தியும்.",
    "intro.askSmriti.title": "ஸ்ம்ரிதியிடம் கேளுங்கள்",
    "intro.askSmriti.where": "ஊதா ஸ்ம்ரிதியிடம் கேளுங்கள் பொத்தான், கீழ்-இடது மூலையில்",
    "intro.askSmriti.desc": "ஒரு கேள்வியைத் தட்டச்சு செய்யவும் அல்லது பேசவும் -- பயன்பாடு, நாள், அல்சைமர் பராமரிப்பு பற்றி. இது உண்மையான பணிகள், நபர்கள், நிகழ்வுகளைத் தேடலாம், புதிய பணியையும் சேர்க்கலாம். ஆங்கிலம், இந்தி, ஹிங்லிஷில் வேலை செய்கிறது.",
    "assistant.title": "ஸ்ம்ரிதியிடம் கேளுங்கள்",
    "assistant.subtitle": "பயன்பாடு, உங்கள் நாள், அல்சைமர் பராமரிப்பு பற்றி கேளுங்கள்.",
    "assistant.listening": "கேட்கிறது…",
    "assistant.inputPlaceholder": "கேள்வியைத் தட்டச்சு செய்யவும்…",
    "assistant.disclaimer": "இது மருத்துவ ஆலோசனைக்கு மாற்றாக இல்லை. அவசரமானதற்கு எஸ்ஓஎஸ் பொத்தானைப் பயன்படுத்தவும்.",
    "assistant.greeting": "வணக்கம், நான் ஸ்ம்ரிதி உதவியாளர். பயன்பாடு, இன்றைய வழக்கம், அல்சைமர் பராமரிப்பு பற்றி கேளுங்கள்.",
    "assistant.thinking": "யோசிக்கிறது…",
    "emergency.sending": "எச்சரிக்கை அனுப்பப்படுகிறது…",
    "emergency.alertSent": "எச்சரிக்கை அனுப்பப்பட்டது",
    "emergency.notified": "க்கு தகவல் அளிக்கப்பட்டது.",
    "emergency.caretakerNotified": "உங்கள் பராமரிப்பாளருக்கு தகவல் அளிக்கப்பட்டது.",
    "emergency.moreAlertsPrefix": "நீங்கள் அனுப்பலாம்",
    "emergency.moreAlertsSuffix": "தேவைப்பட்டால் இந்த மணி நேரத்தில் மேலும் எச்சரிக்கைகள்.",
    "emergency.couldNotSend": "அந்த எச்சரிக்கையை அனுப்ப முடியவில்லை",
    "emergency.police": "காவல்துறை",
    "emergency.medical": "மருத்துவ உதவி",
    "emergency.fire": "தீயணைப்பு",
    "emergency.caretaker": "பராமரிப்பாளர்",
    "emergency.neighbour": "அண்டை வீட்டார்",
    "emergency.notSetYet": "இன்னும் அமைக்கப்படவில்லை",
    "emergency.call": "அழைக்கவும்",
    "emergency.message": "செய்தி",
    "emergency.addInProfile": "சுயவிவரத்தில் சேர்க்கவும்",
    "form.task": "பணி",
    "form.taskPlaceholder": "எ.கா. காலை மருந்து, குளியல், மதிய உணவு",
    "form.from": "இருந்து",
    "form.to": "வரை",
    "form.cancel": "ரத்து செய்",
    "form.saveTask": "பணியைச் சேமி",
    "form.event": "நிகழ்வு",
    "form.eventPlaceholder": "எ.கா. டாக்டர் மேத்தா – பரிசோதனை, பேரனின் பிறந்தநாள்",
    "form.date": "தேதி",
    "form.time": "நேரம்",
    "form.saveEvent": "நிகழ்வைச் சேமி",
    "objects.whatIsIt": "இது என்ன?",
    "objects.namePlaceholder": "எ.கா. பார்ட்டி கோட், காப்பீட்டு கோப்பு",
    "objects.whereDidYouPutIt": "இதை எங்கே வைத்தீர்கள்?",
    "objects.locationPlaceholder": "எ.கா. அலமாரியின் மேல் பகுதி, சமையலறை அலமாரி",
    "objects.retakePhoto": "புகைப்படத்தை மீண்டும் எடு",
    "objects.save": "சேமி",
    "quiz.modalTitle": "வினாடி வினா & விளையாட்டுகள்",
    "quiz.modalSubtitle": "ஒவ்வொரு நாளும் புதிய கேள்விகள் — புள்ளிகள் பெற பதிலளிக்கவும்.",
    "history.analyze": "பகுப்பாய்வு",
    "history.play": "விளையாடு",
    "landing.eyebrow": "ஒரு நினைவக பராமரிப்பு துணை",
    "landing.title1": "சில தொடர்புகள் மங்குகின்றன.",
    "landing.title2": "அவற்றைப் பிடித்திருக்க நாங்கள் உதவுகிறோம்.",
    "landing.sub": "ஸ்ம்ரிதி அல்சைமருடன் வாழும் மக்கள் நோக்குணர்வுடன், பாதுகாப்பாக, ஈடுபாட்டுடன் இருக்க உதவுகிறது — அவர்களைப் பராமரிப்பவர்களுக்கு தினமும் கண்காணிக்க ஒரு தெளிவான இடத்தையும் தருகிறது.",
    "landing.loginBtn": "முக ஸ்கேன் மூலம் உள்நுழையவும்",
    "landing.registerBtn": "உங்களைக் குணப்படுத்துவோம் — பதிவு செய்யவும்",
    "landing.howSmritiHelps": "ஸ்ம்ரிதி எவ்வாறு உதவுகிறது",
    "landing.feature1.title": "நினைவக உதவிகள்",
    "landing.feature1.desc": "தினசரி வழக்கங்கள், மருந்து நினைவூட்டல்கள், மற்றும் குடும்பம் நண்பர்களின் புகைப்பட நினைவக வங்கி, கோரிக்கையின் பேரில் நினைவுகூர தயார்.",
    "landing.feature2.title": "மென்மையான பயிற்சிகள்",
    "landing.feature2.desc": "மனதை ஈடுபாட்டுடன் வைத்திருக்க வடிவமைக்கப்பட்ட, சிரமத்தில் மாறும் குறுகிய நினைவு விளையாட்டுகள் மற்றும் சொல் தொடர்பு பணிகள்.",
    "landing.feature3.title": "பாதுகாப்பு & மேற்பார்வை",
    "landing.feature3.desc": "எப்போதும் ஒரு தட்டல் தூரத்தில் அவசர தொடர்பு, மற்றும் ஒரு பார்வையில் வழக்க பின்பற்றலைக் காட்டும் பராமரிப்பாளர் டாஷ்போர்டு.",
    "landing.feature4.title": "முக-ஸ்கேன் அணுகல்",
    "landing.feature4.desc": "மறக்க கடவுச்சொற்கள் இல்லை. ஒரு விரைவான முக ஸ்கேன் நோயாளியை நேரடியாக அவரது சொந்த டாஷ்போர்டுக்குள் அழைத்துச் செல்கிறது.",
    "landing.readyTitle": "தொடங்கத் தயாரா?",
    "landing.readySub": "பதிவு சுமார் ஐந்து நிமிடங்கள் ஆகும், நோயாளி மற்றும் அவரது பராமரிப்பாளர் இருவரையும் உள்ளடக்கியது.",
    "landing.haveAccount": "எனக்கு ஏற்கனவே ஒரு கணக்கு உள்ளது",
    "dashboard.welcome": "வரவேற்கிறோம்,",
    "dashboard.back": "மீண்டும்",
    "dashboard.welcomeCaretakerOf": "வரவேற்கிறோம் — பராமரிப்பாளர்",
    "dashboard.yourPatient": "உங்கள் நோயாளி",
    "brand.smriti": "ஸ்ம்ரிதி",
    "enum.male": "ஆண்",
    "enum.female": "பெண்",
    "enum.other": "மற்றவை",
    "enum.shortTerm": "குறுகிய கால",
    "enum.longTerm": "நீண்ட கால",
    "enum.both": "இரண்டும்",
    "enum.family": "குடும்பம்",
    "enum.friend": "நண்பர்",
    "enum.relative": "உறவினர்",
    "cond.hearing": "செவித்திறன் குறைபாடு",
    "cond.speech": "பேச்சுக் குறைபாடு",
    "cond.mobility": "இயக்கக் குறைபாடு",
    "cond.vision": "பார்வைக் குறைபாடு",
    "cond.diabetes": "நீரிழிவு",
    "cond.hypertension": "உயர் இரத்த அழுத்தம்",
    "reg.pageTitle": "உங்களைக் குணப்படுத்துவோம்",
    "reg.intro": "நோயாளி மற்றும் அவரது பராமரிப்பாளர் பற்றி எங்களிடம் கூறுங்கள். இது சுமார் ஐந்து நிமிடங்கள் ஆகும்.",
    "reg.patientHint": "நினைவக இழப்புடன் வாழும் நபரைப் பற்றிய அடிப்படை தகவல்.",
    "reg.caretakerHint": "நோயாளியை தினமும் யார் பராமரிக்கிறார்கள்.",
    "reg.fullName": "முழு பெயர்",
    "reg.age": "வயது",
    "reg.gender": "பாலினம்",
    "reg.memoryLossType": "நினைவக இழப்பு வகை",
    "reg.onsetDate": "நோய் தொடங்கிய தேதி",
    "reg.underObservation": "நோயாளி தற்போது தொழில்முறை கண்காணிப்பில் உள்ளாரா?",
    "reg.facilityLocation": "மருத்துவமனை / வசதி இருப்பிடம்",
    "reg.homeAddress": "வீட்டு முகவரி",
    "reg.connectionType": "தொடர்பை எது சிறப்பாக விவரிக்கிறது?",
    "reg.hoursAvailable": "24 மணி நேரத்தில் நோயாளியுடன் கிடைக்கும் மணிநேரம் (1–24)",
    "reg.phoneNumber": "தொலைபேசி எண்",
    "reg.relationWithPatient": "நோயாளியுடனான உறவு",
    "reg.caretakerAddress": "பராமரிப்பாளரின் முகவரி",
    "reg.sameAsPatient": "நோயாளியைப் போலவே",
    "reg.differentLocation": "வேறு இடம்",
    "reg.yes": "ஆம்",
    "reg.no": "இல்லை",
    "reg.name": "பெயர்",
    "reg.howLongKnown": "நோயாளி அவர்களை எவ்வளவு காலமாக அறிவார்?",
    "login.welcomeBack": "மீண்டும் வரவேற்கிறோம்",
    "login.subtext": "நோயாளி டாஷ்போர்டுக்குள் நுழைய உங்கள் முகத்தை ஸ்கேன் செய்யவும்.",
    "login.patientTab": "நோயாளி",
    "login.caretakerTab": "பராமரிப்பாளர்",
    "login.scanBtn": "ஸ்கேன் செய்து உள்நுழையவும்",
    "login.newHere": "இங்கே புதியவரா?",
    "login.registerInstead": "பதிலாக பதிவு செய்யவும்",
    "profile.photo": "சுயவிவரப் புகைப்படம்",
    "profile.patientDetails": "நோயாளி விவரங்கள்",
    "profile.editableDetails": "திருத்தக்கூடிய விவரங்கள்",
    "profile.caretakerDetails": "பராமரிப்பாளர் விவரங்கள்",
    "profile.changeCaretaker": "பராமரிப்பாளரை மாற்றவும்",
    "profile.changePhoto": "புகைப்படத்தை மாற்றவும்",
    "profile.registerNewCaretaker": "புதிய பராமரிப்பாளரைப் பதிவு செய்யவும்",
    "profile.unusualActivities": "வழக்கத்திற்கு மாறான மீண்டும் மீண்டும் நடவடிக்கைகள்",
    "profile.relationToPatient": "நோயாளியுடனான உறவு",
    "profile.otherConditions": "பிற நிலைமைகள்",
    "profile.contactNumber": "தொடர்பு எண்",
    "profile.diseaseOnset": "நோய் தொடக்கம்",
    "profile.subtitle": "நோயாளி மற்றும் பராமரிப்பாளர் விவரங்களைப் பார்த்து புதுப்பிக்கவும்.",
    "profile.backToDashboard": "டாஷ்போர்டுக்குத் திரும்பு",
    "recognize.searchPlaceholder": "பெயர், உறவு, அல்லது தொடர்பு மூலம் தேடவும்…",
    "recognize.backToScan": "ஸ்கேனுக்குத் திரும்பு",
    "reg.relation": "உறவு",
    "location.nearbyHospital": "மருத்துவமனை",
    "location.nearbyPharmacy": "மருந்தகம்",
    "location.nearbyPolice": "காவல்துறை",
    "chart.byGame": "விளையாட்டு வாரியாக",
    "chart.byGameSubtitle": "விளையாட்டுக்கு துல்லியம், கடந்த 7 நாட்கள்",
    "chart.noGamesYet": "கடந்த 7 நாட்களில் விளையாட்டுகள் எதுவும் விளையாடவில்லை.",
    "nav.logout": "வெளியேறு",
  },
  te: {
    "dashboard.subGreeting": "\u0c2e\u0c40 \u0c30\u0c4b\u0c1c\u0c41 \u0c2f\u0c4a\u0c15\u0c4d\u0c15 \u0c12\u0c15 \u0c1a\u0c42\u0c2a\u0c41.",
    "nav.profile": "\u0c2a\u0c4d\u0c30\u0c4a\u0c2b\u0c48\u0c32\u0c4d", "nav.quizGames": "\u0c15\u0c4d\u0c35\u0c3f\u0c1c\u0c4d & \u0c17\u0c47\u0c2e\u0c4d\u0c38\u0c4d",
    "nav.emergency": "\u0c05\u0c24\u0c4d\u0c2f\u0c35\u0c38\u0c30 \u0c38\u0c39\u0c3e\u0c2f\u0c02", "nav.sos": "\u0c0e\u0c38\u0c4d\u0c13\u0c0e\u0c38\u0c4d",
    "nav.knowApp": "\u0c2f\u0c3e\u0c2a\u0c4d \u0c17\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f \u0c24\u0c46\u0c32\u0c41\u0c38\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f", "nav.askSmriti": "\u0c38\u0c4d\u0c2e\u0c43\u0c24\u0c3f\u0c28\u0c3f \u0c05\u0c21\u0c17\u0c02\u0c21\u0c3f",
    "stat.tasksToday": "\u0c08\u0c30\u0c4b\u0c1c\u0c41 \u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c2a\u0c28\u0c41\u0c32\u0c41",
    "stat.quizGamesWeek": "\u0c08 \u0c35\u0c3e\u0c30\u0c02 \u0c15\u0c4d\u0c35\u0c3f\u0c1c\u0c4d & \u0c17\u0c47\u0c2e\u0c4d\u0c38\u0c4d \u0c16\u0c1a\u0c4d\u0c1a\u0c3f\u0c24\u0c24\u0c4d\u0c35\u0c02 \u2014 \u0c06\u0c21\u0c1f\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c28\u0c4a\u0c15\u0c4d\u0c15\u0c02\u0c21\u0c3f",
    "panel.timetable": "\u0c28\u0c47\u0c1f\u0c3f \u0c15\u0c3e\u0c32\u0c2a\u0c1f\u0c4d\u0c1f\u0c3f\u0c15", "panel.events": "\u0c2e\u0c41\u0c16\u0c4d\u0c2f\u0c2e\u0c48\u0c28 \u0c38\u0c02\u0c18\u0c1f\u0c28\u0c32\u0c41 & \u0c24\u0c47\u0c26\u0c40\u0c32\u0c41",
    "panel.location": "\u0c2a\u0c4d\u0c30\u0c38\u0c4d\u0c24\u0c41\u0c24 \u0c38\u0c4d\u0c25\u0c3e\u0c28\u0c02", "panel.findThings": "\u0c28\u0c3e \u0c35\u0c38\u0c4d\u0c24\u0c41\u0c35\u0c41\u0c32\u0c28\u0c41 \u0c15\u0c28\u0c41\u0c17\u0c4a\u0c28\u0c02\u0c21\u0c3f",
    "panel.recognizePerson": "\u0c35\u0c4d\u0c2f\u0c15\u0c4d\u0c24\u0c3f\u0c28\u0c3f \u0c17\u0c41\u0c30\u0c4d\u0c24\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f", "intro.title": "\u0c2f\u0c3e\u0c2a\u0c4d \u0c17\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f \u0c24\u0c46\u0c32\u0c41\u0c38\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f",
    "stat.allDone": "అన్నీ పూర్తయ్యాయి",
    "stat.left": "మిగిలింది",
    "stat.noTasksYet": "ఇంకా పనులు లేవు",
    "stat.noneScheduled": "ఏదీ షెడ్యూల్ చేయలేదు",
    "stat.nothingLeftToday": "ఈరోజు ఏమీ మిగలలేదు",
    "stat.quizLabel": "క్విజ్",
    "stat.gamesLabel": "గేమ్స్",
    "stat.pts": "పాయింట్లు",
    "stat.noDataYet": "ఇంకా డేటా లేదు",
    "stat.upcomingEvent": "రాబోయే సంఘటన",
    "stat.nextTask": "తదుపరి పని",
    "timetable.empty": "ఇంకా పనులు లేవు — దైనందిన దినచర్యను రూపొందించడానికి పని జోడించు నొక్కండి.",
    "events.empty": "ఇంకా సంఘటనలు లేవు — అపాయింట్‌మెంట్‌లు, పుట్టినరోజులు జోడించడానికి సంఘటన జోడించు నొక్కండి.",
    "camera.live": "కెమెరా లైవ్‌లో ఉంది — మీ ముఖాన్ని మధ్యలో ఉంచి, స్కాన్ నొక్కండి.",
    "camera.permissionNeeded": "కొనసాగించడానికి కెమెరా అనుమతి అవసరం. దయచేసి అనుమతి ఇవ్వండి.",
    "objects.cameraLive": "కెమెరా లైవ్‌లో ఉంది — వస్తువును మధ్యలో ఉంచి, ఫోటో తీయండి నొక్కండి.",
    "location.getting": "ప్రస్తుత స్థానం పొందుతోంది…",
    "location.accurateTo": "సుమారు ఖచ్చితత్వం",
    "location.phonesNote": "నిజమైన జీపీఎస్ ఉన్న ఫోన్‌లు ల్యాప్‌టాప్‌ల కంటే చాలా ఖచ్చితమైనవి.",
    "location.lastUpdated": "చివరిగా నవీకరించబడింది",
    "location.errorGeneric": "స్థానం పొందలేకపోయాము.",
    "location.errorDenied": "స్థాన అనుమతి నిరాకరించబడింది — ప్రత్యక్ష స్థానం చూడటానికి అనుమతి ఇవ్వండి.",
    "location.errorUnavailable": "ప్రస్తుతం స్థానం అందుబాటులో లేదు.",
    "location.errorTimeout": "స్థాన అభ్యర్థన సమయం ముగిసింది.",
    "location.notAvailable": "అందుబాటులో లేదు",
    "location.notSupported": "ఈ పరికరం/బ్రౌజర్‌లో జియోలొకేషన్ అందుబాటులో లేదు.",
    "location.refresh": "ప్రత్యక్ష స్థానాన్ని రిఫ్రెష్ చేయండి",
    "trend.green": "మెరుగుపడుతోంది",
    "trend.yellow": "స్థిరంగా ఉంది",
    "trend.red": "శ్రద్ధ అవసరం",
    "chart.pointsThisWeek": "ఈ వారం సంపాదించిన పాయింట్లు (క్విజ్ + గేమ్స్)",
    "chart.noActivityWeek": "ఈ వారం ఇంకా కార్యకలాపం లేదు",
    "chart.pointsLast8Weeks": "గత 8 వారాల పాయింట్లు (క్విజ్ + గేమ్స్)",
    "chart.noActivityMonth": "ఈ నెల ఇంకా కార్యకలాపం లేదు",
    "chart.accuracySpeed": "ఖచ్చితత్వం + వేగం కలిపి",
    "chart.noActivityWeekQG": "ఈ వారం క్విజ్ లేదా గేమ్ కార్యకలాపం లేదు",
    "section.progress": "పురోగతి",
    "section.schedule": "షెడ్యూల్",
    "section.safety": "భద్రత & త్వరిత చర్యలు",
    "chart.title": "జ్ఞాపకశక్తి & గుర్తుండే పురోగతి",
    "chart.subtitle": "క్విజ్ ఫలితాల ఆధారంగా",
    "chart.shortTerm": "స్వల్పకాలిక",
    "chart.longTerm": "దీర్ఘకాలిక",
    "chart.brainAccuracy": "మెదడు ఖచ్చితత్వం",
    "recognize.subtitle": "కెమెరాను వారి వైపు చూపి స్కాన్ నొక్కండి.",
    "recognize.searchPeople": "వ్యక్తులను వెతకండి",
    "recognize.scanBtn": "ఈ వ్యక్తిని స్కాన్ చేయండి",
    "timetable.subtitle": "దైనందిన దినచర్య — జోడించండి, సవరించండి, ప్రతి పనిని నిర్ధారించండి.",
    "timetable.addTask": "పని జోడించు",
    "events.subtitle": "ఒకసారి రిమైండర్‌లు — అపాయింట్‌మెంట్‌లు, పుట్టినరోజులు మరియు మరిన్ని.",
    "events.addEvent": "సంఘటన జోడించు",
    "objects.subtitle": "వస్తువు ఫోటో తీసి మీరు దాన్ని ఎక్కడ ఉంచారో గమనించండి.",
    "objects.search": "వెతకండి",
    "objects.takePhoto": "ఫోటో తీయండి",
    "common.loading": "లోడ్ అవుతోంది…",
    "quiz.nextIn": "తదుపరి",
    "quiz.level": "స్థాయి:",
    "quiz.catchingUpOn": "క్యాచప్ చేస్తున్నాం",
    "diff.easy": "సులభం",
    "diff.medium": "మధ్యస్థం",
    "diff.hard": "కష్టం",
    "diff.personal": "వ్యక్తిగతం",
    "diff.orientation": "ఓరియంటేషన్",
    "dayDetail.notAttempted": "ప్రయత్నించలేదు",
    "dayDetail.correct": "సరైనది",
    "dayDetail.incorrect": "తప్పు",
    "dayDetail.correctAnswer": "సరైన సమాధానం:",
    "quiz.notQuite": "సరిగ్గా లేదు — సరైన సమాధానం",
    "game.notAvailable": "ఇంకా అందుబాటులో లేదు",
    "game.alreadyCompleted": "మీరు దీన్ని ఇప్పటికే పూర్తి చేశారు — భేష్!",
    "game.alreadyPlayed": "మీరు ఈ రౌండ్ ఇప్పటికే ఆడారు.",
    "game.tracedPrefix": "మీరు గీశారు",
    "game.tracedSuffix": "! భేష్.",
    "game.wonderful": "అద్భుతం! మీరు సంపాదించారు",
    "game.point": "పాయింట్",
    "game.points": "పాయింట్లు",
    "game.notQuitePrefix": "సరిగ్గా లేదు — సమాధానం",
    "game.niceTry": "బాగా ప్రయత్నించారు!",
    "game.goodEffort": "బాగా చేశారు! తదుపరిదానికి వెళ్దాం.",
    "quiz.correctFeedback": "సరైనది! మీరు సంపాదించారు",
    "quiz.pointsWord": "పాయింట్లు",
    "quiz.of": "లో",
    "quiz.correctWord": "సరైనవి",
    "quiz.comeBack": "మళ్ళీ రండి",
    "quiz.tomorrow": "రేపు",
    "quiz.nextWeek": "వచ్చే వారం",
    "quiz.forNewSet": "కొత్త సెట్ కోసం",
    "game.pointsExclaim": "పాయింట్లు!",
    "game.seeYouTomorrow": "కొత్త ఆట కోసం వచ్చే ఆదివారం కలుద్దాం!",
    "quiz.tabDaily": "నేటి క్విజ్",
    "quiz.tabGame": "నేటి గేమ్",
    "quiz.historyBtn": "చరిత్ర",
    "quiz.doneForNow": "ప్రస్తుతానికి పూర్తయింది",
    "history.title": "రోజువారీ చరిత్ర",
    "history.subtitle": "మీరు ఏ రోజులు పూర్తి చేశారో చూడండి — మీరు మిస్ అయిన వాటిని పూర్తి చేయండి.",
    "quiz.backToQuiz": "క్విజ్‌కు తిరిగి వెళ్ళండి",
    "dayDetail.legend": "ఆకుపచ్చ = సరైనది, ఎరుపు = తప్పు, బూడిద = ప్రయత్నించలేదు.",
    "quiz.quizWord": "క్విజ్",
    "dayDetail.backToHistory": "చరిత్రకు తిరిగి వెళ్ళండి",
    "intro.subtitle": "స్మృతిలో ఉన్న ప్రతిదీ, అది దేని కోసం, దాన్ని ఎలా ఉపయోగించాలి.",
    "intro.gotIt": "అర్థమైంది",
    "intro.recognizePerson.title": "వ్యక్తిని గుర్తించండి",
    "intro.recognizePerson.where": "డాష్‌బోర్డ్, మీ ప్రోగ్రెస్ చార్ట్ పక్కన",
    "intro.recognizePerson.desc": "ఒకరిపై కెమెరాను చూపి స్కాన్ నొక్కి వారి పేరు, మీతో సంబంధం, మరియు ఏవైనా జ్ఞాపక గమనికలు చూడండి. వారు ఇంకా గుర్తించబడకపోతే, మీరు వెంటనే ఫోటోతో వారిని జోడించవచ్చు. వ్యక్తులను వెతకండి నొక్కి నమోదు చేసిన వారందరినీ నిజమైన ఫోటోలతో బ్రౌజ్ చేయండి.",
    "intro.timetable.title": "నేటి కాలపట్టిక",
    "intro.timetable.where": "డాష్‌బోర్డ్, షెడ్యూల్ విభాగం",
    "intro.timetable.desc": "మీ దైనందిన దినచర్య -- భోజనం, మందులు, స్నానం మరియు మరిన్ని. ప్రతి పనికి సమయం ఉంటుంది, ధ్వని రిమైండర్‌లతో. చేసిన తర్వాత నిర్ధారించు నొక్కండి, టిక్ గుర్తు వస్తుంది; మిస్ అయితే క్రాస్ చూపిస్తుంది. ఎప్పుడైనా పనులను జోడించవచ్చు, సవరించవచ్చు, తొలగించవచ్చు.",
    "intro.events.title": "ముఖ్యమైన సంఘటనలు",
    "intro.events.where": "డాష్‌బోర్డ్, కాలపట్టిక పక్కన",
    "intro.events.desc": "ఒకసారి అపాయింట్‌మెంట్‌లు, పుట్టినరోజులు, తేదీలను జోడించండి. ఎంచుకున్న సమయంలో ధ్వని అలర్ట్ వస్తుంది. చూసిన తర్వాత సరే నొక్కండి, ఈవెంట్ స్వయంచాలకంగా క్లియర్ అవుతుంది.",
    "intro.quizGames.title": "క్విజ్ & గేమ్స్",
    "intro.quizGames.where": "పైన క్విజ్ & గేమ్స్ బటన్, లేదా వారపు స్కోర్ కార్డ్‌ను నొక్కండి",
    "intro.quizGames.desc": "మనసును చురుకుగా ఉంచడానికి ప్రతిరోజూ ఒక క్విజ్, వేరే మినీ-గేమ్. పనితీరును బట్టి ప్రశ్నలు సులభంగా లేదా కష్టంగా మారతాయి. ఏ రోజులు పూర్తి చేశారో చూడటానికి చరిత్ర బటన్‌ను ఉపయోగించి, మిస్ అయిన వాటిని పూర్తి చేయండి.",
    "intro.findThings.title": "నా వస్తువులను కనుగొనండి",
    "intro.findThings.where": "డాష్‌బోర్డ్, ప్రస్తుత స్థానం పక్కన",
    "intro.findThings.desc": "ఒక వస్తువును ఫోటో తీసి ఎక్కడ పెట్టారో గమనించండి, పార్టీ కోటు అల్మారా పై షెల్ఫ్‌లో లాగా. తర్వాత వెతకండి నొక్కి నిజమైన ఫోటోలతో బ్రౌజ్ చేయండి, లేదా పేరు స్థానం ద్వారా వెతకండి.",
    "intro.location.title": "ప్రస్తుత స్థానం",
    "intro.location.where": "డాష్‌బోర్డ్",
    "intro.location.desc": "మీ పరికరం GPSని ఉపయోగించి లైవ్ మ్యాప్‌లో నిజమైన స్థానాన్ని చూపిస్తుంది. అప్‌డేట్ చేయడానికి లైవ్ లొకేషన్ రిఫ్రెష్ చేయండి నొక్కండి -- కేర్‌టేకర్‌కు ఉపయోగపడుతుంది.",
    "intro.profile.title": "ప్రొఫైల్",
    "intro.profile.where": "పైన ప్రొఫైల్ బటన్",
    "intro.profile.desc": "మీ వివరాలు, కేర్‌టేకర్ సమాచారం, పొరుగువారి ఫోన్ నంబర్. ఎమర్జెన్సీ స్క్రీన్‌లో సరైన నంబర్‌లు ఉండేలా దీన్ని తాజాగా ఉంచండి.",
    "intro.emergency.title": "అత్యవసర ఎస్ఓఎస్",
    "intro.emergency.where": "ఎరుపు ఎస్ఓఎస్ బటన్, దిగువ-కుడి మూలలో",
    "intro.emergency.desc": "నిజమైన అత్యవసర పరిస్థితి కోసం. ఒక్క నొక్కు పోలీసు, వైద్య, అగ్నిమాపక, కేర్‌టేకర్, పొరుగువారి నంబర్‌లను చూపిస్తుంది, వెంటనే కాల్ చేయడానికి సిద్ధంగా, WhatsApp సందేశం కూడా.",
    "intro.askSmriti.title": "స్మృతిని అడగండి",
    "intro.askSmriti.where": "ఊదారంగు స్మృతిని అడగండి బటన్, దిగువ-ఎడమ మూలలో",
    "intro.askSmriti.desc": "ఒక ప్రశ్నను టైప్ చేయండి లేదా మాట్లాడండి -- యాప్, రోజు, అల్జీమర్స్ సంరక్షణ గురించి. ఇది నిజమైన పనులు, వ్యక్తులు, ఈవెంట్‌లను చూడగలదు, కొత్త పనిని కూడా జోడించగలదు. ఇంగ్లీష్, హిందీ, హింగ్లీష్‌లో పనిచేస్తుంది.",
    "assistant.title": "స్మృతిని అడగండి",
    "assistant.subtitle": "యాప్, మీ రోజు, అల్జీమర్స్ సంరక్షణ గురించి అడగండి.",
    "assistant.listening": "వింటున్నాం…",
    "assistant.inputPlaceholder": "ప్రశ్నను టైప్ చేయండి…",
    "assistant.disclaimer": "ఇది వైద్య సలహాకు ప్రత్యామ్నాయం కాదు. అత్యవసరమైనదానికి ఎస్ఓఎస్ బటన్‌ను ఉపయోగించండి.",
    "assistant.greeting": "నమస్తే, నేను స్మృతి అసిస్టెంట్. యాప్, నేటి దినచర్య, అల్జీమర్స్ సంరక్షణ గురించి అడగండి.",
    "assistant.thinking": "ఆలోచిస్తున్నాం…",
    "emergency.sending": "అలర్ట్ పంపుతున్నాం…",
    "emergency.alertSent": "అలర్ట్ పంపబడింది",
    "emergency.notified": "కి తెలియజేయబడింది.",
    "emergency.caretakerNotified": "మీ కేర్‌టేకర్‌కు తెలియజేయబడింది.",
    "emergency.moreAlertsPrefix": "మీరు పంపవచ్చు",
    "emergency.moreAlertsSuffix": "అవసరమైతే ఈ గంటలో మరిన్ని అలర్ట్‌లు.",
    "emergency.couldNotSend": "ఆ అలర్ట్‌ను పంపలేకపోయాము",
    "emergency.police": "పోలీసు",
    "emergency.medical": "వైద్య సహాయం",
    "emergency.fire": "అగ్నిమాపక",
    "emergency.caretaker": "కేర్‌టేకర్",
    "emergency.neighbour": "పొరుగువారు",
    "emergency.notSetYet": "ఇంకా సెట్ చేయలేదు",
    "emergency.call": "కాల్ చేయండి",
    "emergency.message": "సందేశం",
    "emergency.addInProfile": "ప్రొఫైల్‌లో జోడించండి",
    "form.task": "పని",
    "form.taskPlaceholder": "ఉదా. ఉదయం మందు, స్నానం, భోజనం",
    "form.from": "నుండి",
    "form.to": "వరకు",
    "form.cancel": "రద్దు చేయండి",
    "form.saveTask": "పనిని సేవ్ చేయండి",
    "form.event": "సంఘటన",
    "form.eventPlaceholder": "ఉదా. డా. మెహతా – చెకప్, మనవడి పుట్టినరోజు",
    "form.date": "తేదీ",
    "form.time": "సమయం",
    "form.saveEvent": "సంఘటనను సేవ్ చేయండి",
    "objects.whatIsIt": "ఇది ఏమిటి?",
    "objects.namePlaceholder": "ఉదా. పార్టీ కోటు, భీమా ఫైల్",
    "objects.whereDidYouPutIt": "మీరు దీన్ని ఎక్కడ పెట్టారు?",
    "objects.locationPlaceholder": "ఉదా. అల్మారా పై భాగం, వంటగది క్యాబినెట్",
    "objects.retakePhoto": "ఫోటోను మళ్లీ తీయండి",
    "objects.save": "సేవ్ చేయండి",
    "quiz.modalTitle": "క్విజ్ & గేమ్స్",
    "quiz.modalSubtitle": "ప్రతిరోజూ కొత్త ప్రశ్నలు — పాయింట్లు సంపాదించడానికి సమాధానం ఇవ్వండి.",
    "history.analyze": "విశ్లేషించండి",
    "history.play": "ఆడండి",
    "landing.eyebrow": "ఒక మెమరీ కేర్ సహచరుడు",
    "landing.title1": "కొన్ని బంధాలు మసకబారతాయి.",
    "landing.title2": "వాటిని పట్టుకోవడంలో మేము మీకు సహాయం చేస్తాము.",
    "landing.sub": "అల్జీమర్స్‌తో జీవిస్తున్న వ్యక్తులు దిశానిర్దేశం, భద్రత, నిమగ్నత కలిగి ఉండటానికి స్మృతి సహాయపడుతుంది — వారిని చూసుకునేవారికి ప్రతిరోజూ గమనించడానికి ఒక స్పష్టమైన స్థలాన్ని ఇస్తుంది.",
    "landing.loginBtn": "ఫేస్ స్కాన్‌తో లాగిన్ చేయండి",
    "landing.registerBtn": "మిమ్మల్ని నయం చేద్దాం — నమోదు చేసుకోండి",
    "landing.howSmritiHelps": "స్మృతి ఎలా సహాయపడుతుంది",
    "landing.feature1.title": "మెమరీ ఎయిడ్స్",
    "landing.feature1.desc": "దైనందిన దినచర్యలు, మందుల రిమైండర్‌లు, మరియు కుటుంబం స్నేహితుల ఫోటో మెమరీ బ్యాంక్, అభ్యర్థనపై గుర్తుచేయడానికి సిద్ధంగా.",
    "landing.feature2.title": "సున్నితమైన వ్యాయామాలు",
    "landing.feature2.desc": "మనసును నిమగ్నంగా ఉంచడానికి రూపొందించిన, కష్టతలో మారే చిన్న రీకాల్ గేమ్‌లు మరియు పద అనుబంధ పనులు.",
    "landing.feature3.title": "భద్రత & పర్యవేక్షణ",
    "landing.feature3.desc": "ఎల్లప్పుడూ ఒక నొక్కు దూరంలో అత్యవసర సంప్రదింపు, మరియు ఒక చూపులో దినచర్య పాటింపును చూపే కేర్‌టేకర్ డాష్‌బోర్డ్.",
    "landing.feature4.title": "ఫేస్-స్కాన్ యాక్సెస్",
    "landing.feature4.desc": "మర్చిపోవడానికి పాస్‌వర్డ్‌లు లేవు. వేగవంతమైన ఫేస్ స్కాన్ రోగిని నేరుగా వారి స్వంత డాష్‌బోర్డ్‌లోకి తీసుకువెళుతుంది.",
    "landing.readyTitle": "ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?",
    "landing.readySub": "నమోదు దాదాపు ఐదు నిమిషాలు పడుతుంది మరియు రోగి మరియు వారి కేర్‌టేకర్ ఇద్దరినీ కవర్ చేస్తుంది.",
    "landing.haveAccount": "నా వద్ద ఇప్పటికే ఖాతా ఉంది",
    "dashboard.welcome": "స్వాగతం,",
    "dashboard.back": "తిరిగి",
    "dashboard.welcomeCaretakerOf": "స్వాగతం — కేర్‌టేకర్",
    "dashboard.yourPatient": "మీ రోగి",
    "brand.smriti": "స్మృతి",
    "enum.male": "పురుషుడు",
    "enum.female": "స్త్రీ",
    "enum.other": "ఇతర",
    "enum.shortTerm": "స్వల్పకాలిక",
    "enum.longTerm": "దీర్ఘకాలిక",
    "enum.both": "రెండూ",
    "enum.family": "కుటుంబం",
    "enum.friend": "స్నేహితుడు",
    "enum.relative": "బంధువు",
    "cond.hearing": "వినికిడి లోపం",
    "cond.speech": "మాట లోపం",
    "cond.mobility": "చలనశీలత లోపం",
    "cond.vision": "దృష్టి లోపం",
    "cond.diabetes": "మధుమేహం",
    "cond.hypertension": "అధిక రక్తపోటు",
    "reg.pageTitle": "మిమ్మల్ని నయం చేద్దాం",
    "reg.intro": "రోగి మరియు వారి కేర్‌టేకర్ గురించి మాకు చెప్పండి. దీనికి దాదాపు ఐదు నిమిషాలు పడుతుంది.",
    "reg.patientHint": "మెమరీ లాస్‌తో జీవిస్తున్న వ్యక్తి గురించి ప్రాథమిక సమాచారం.",
    "reg.caretakerHint": "రోగిని రోజువారీ ఎవరు చూసుకుంటున్నారు.",
    "reg.fullName": "పూర్తి పేరు",
    "reg.age": "వయస్సు",
    "reg.gender": "లింగం",
    "reg.memoryLossType": "మెమరీ లాస్ రకం",
    "reg.onsetDate": "వ్యాధి ప్రారంభమైన తేదీ",
    "reg.underObservation": "రోగి ప్రస్తుతం వృత్తిపరమైన పర్యవేక్షణలో ఉన్నారా?",
    "reg.facilityLocation": "ఆసుపత్రి / సదుపాయ స్థానం",
    "reg.homeAddress": "ఇంటి చిరునామా",
    "reg.connectionType": "సంబంధాన్ని ఏది బాగా వివరిస్తుంది?",
    "reg.hoursAvailable": "24 గంటల్లో రోగితో అందుబాటులో ఉండే గంటలు (1–24)",
    "reg.phoneNumber": "ఫోన్ నంబర్",
    "reg.relationWithPatient": "రోగితో సంబంధం",
    "reg.caretakerAddress": "కేర్‌టేకర్ చిరునామా",
    "reg.sameAsPatient": "రోగి మాదిరిగానే",
    "reg.differentLocation": "వేరే స్థానం",
    "reg.yes": "అవును",
    "reg.no": "కాదు",
    "reg.name": "పేరు",
    "reg.howLongKnown": "రోగి వారిని ఎంతకాలంగా తెలుసు?",
    "login.welcomeBack": "తిరిగి స్వాగతం",
    "login.subtext": "రోగి డాష్‌బోర్డ్‌లోకి ప్రవేశించడానికి మీ ముఖాన్ని స్కాన్ చేయండి.",
    "login.patientTab": "రోగి",
    "login.caretakerTab": "కేర్‌టేకర్",
    "login.scanBtn": "స్కాన్ చేసి లాగిన్ చేయండి",
    "login.newHere": "ఇక్కడ కొత్తా?",
    "login.registerInstead": "బదులుగా నమోదు చేసుకోండి",
    "profile.photo": "ప్రొఫైల్ ఫోటో",
    "profile.patientDetails": "రోగి వివరాలు",
    "profile.editableDetails": "సవరించదగిన వివరాలు",
    "profile.caretakerDetails": "కేర్‌టేకర్ వివరాలు",
    "profile.changeCaretaker": "కేర్‌టేకర్‌ను మార్చండి",
    "profile.changePhoto": "ఫోటోను మార్చండి",
    "profile.registerNewCaretaker": "కొత్త కేర్‌టేకర్‌ను నమోదు చేయండి",
    "profile.unusualActivities": "అసాధారణ పునరావృత కార్యకలాపాలు",
    "profile.relationToPatient": "రోగితో సంబంధం",
    "profile.otherConditions": "ఇతర పరిస్థితులు",
    "profile.contactNumber": "సంప్రదింపు నంబర్",
    "profile.diseaseOnset": "వ్యాధి ప్రారంభం",
    "profile.subtitle": "రోగి మరియు కేర్‌టేకర్ వివరాలను చూసి నవీకరించండి.",
    "profile.backToDashboard": "డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళండి",
    "recognize.searchPlaceholder": "పేరు, సంబంధం, లేదా అనుబంధం ద్వారా వెతకండి…",
    "recognize.backToScan": "స్కాన్‌కు తిరిగి వెళ్ళండి",
    "reg.relation": "సంబంధం",
    "location.nearbyHospital": "ఆసుపత్రి",
    "location.nearbyPharmacy": "ఫార్మసీ",
    "location.nearbyPolice": "పోలీసు",
    "chart.byGame": "గేమ్ వారీగా",
    "chart.byGameSubtitle": "గేమ్‌కు ఖచ్చితత్వం, గత 7 రోజులు",
    "chart.noGamesYet": "గత 7 రోజుల్లో ఏ గేమ్‌లు ఆడలేదు.",
    "nav.logout": "లాగ్ అవుట్",
  },
  as: {
    "dashboard.subGreeting": "\u0986\u09aa\u09a8\u09be\u09b0 \u09a6\u09bf\u09a8\u099f\u09cb\u09b0 \u098f\u0995 \u09a6\u09c3\u09b6\u09cd\u09af\u0964",
    "nav.profile": "\u09aa\u09cd\u09f0\u09cb\u09eb\u09be\u0987\u09b2", "nav.quizGames": "\u0995\u09c1\u0987\u099c \u0986\u09f0\u09c1 \u0997\u09c7\u09ae",
    "nav.emergency": "\u099c\u09f0\u09c1\u09f0\u09c0\u0995\u09be\u09b2\u09c0\u09a8 \u09b8\u09b9\u09be\u09af়", "nav.sos": "\u098f\u099b\u0985\u098f\u099b",
    "nav.knowApp": "\u098f\u09aa\u099f\u09cb\u09f0 \u09ac\u09bf\u09b7\u09df\u09c7 \u099c\u09be\u09a8\u0995", "nav.askSmriti": "\u09b8\u09cd\u09ae\u09c3\u09a4\u09bf\u0995 \u09b8\u09cb\u09a7\u0995",
    "stat.tasksToday": "আজি সম্পূৰ্ণ কৰা কাম",
    "stat.quizGamesWeek": "\u098f\u0987 \u09b8\u09aa\u09cd\u09a4\u09be\u09b9\u09f0 \u0995\u09c1\u0987\u099c \u0986\u09f0\u09c1 \u0997\u09c7\u09ae \u09a8\u09bf\u0996\u09c1\u0981\u09a4\u09a4\u09be \u2014 \u0996\u09c7\u09b2\u09bf\u09ac\u09b2\u09c8 \u099f\u09bf\u09aa\u0995",
    "panel.timetable": "\u0986\u099c\u09bf\u09f0 \u09b8\u09ae\u09df\u09b8\u09c2\u099a\u09c0", "panel.events": "\u0997\u09c1\u09f0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09f0\u09cd\u09a3 \u0998\u099f\u09a8\u09be \u0986\u09f0\u09c1 \u09a4\u09be\u09f0\u09bf\u0996",
    "panel.location": "\u09ac\u09f0\u09cd\u09a4\u09ae\u09be\u09a8 \u0985\u09ac\u09b8\u09cd\u09a5\u09be\u09a8", "panel.findThings": "\u09ae\u09cb\u09f0 \u09ac\u09b8\u09cd\u09a4\u09c1 \u09ac\u09bf\u099a\u09be\u09f0\u0995",
    "panel.recognizePerson": "\u098f\u099c\u09a8 \u09ac\u09cd\u09af\u0995\u09cd\u09a4\u09bf\u0995 \u099a\u09bf\u09a8\u09be\u0995\u09cd\u09a4 \u0995\u09f0\u0995", "intro.title": "\u098f\u09aa\u099f\u09cb\u09f0 \u09ac\u09bf\u09b7\u09df\u09c7 \u099c\u09be\u09a8\u0995",
    "stat.allDone": "সকলো সম্পূৰ্ণ",
    "stat.left": "বাকী",
    "stat.noTasksYet": "এতিয়ালৈকে কাম নাই",
    "stat.noneScheduled": "একো নিৰ্ধাৰণ কৰা নাই",
    "stat.nothingLeftToday": "আজি একো বাকী নাই",
    "stat.quizLabel": "কুইজ",
    "stat.gamesLabel": "গেম",
    "stat.pts": "পইণ্ট",
    "stat.noDataYet": "এতিয়ালৈকে তথ্য নাই",
    "stat.upcomingEvent": "অহা ঘটনা",
    "stat.nextTask": "পৰৱৰ্তী কাম",
    "timetable.empty": "এতিয়ালৈকে কাম নাই — দৈনিক কাৰ্যসূচী গঢ়িবলৈ কাম যোগ কৰক টিপক।",
    "events.empty": "এতিয়ালৈকে ঘটনা নাই — সাক্ষাৎ, জন্মদিন যোগ কৰিবলৈ ঘটনা যোগ কৰক টিপক।",
    "camera.live": "কেমেৰা চলি আছে — আপোনাৰ মুখখন মাজত ৰাখক, তাৰপিছত স্কেন টিপক।",
    "camera.permissionNeeded": "অব্যাহত ৰাখিবলৈ কেমেৰাৰ অনুমতি প্ৰয়োজন। অনুগ্ৰহ কৰি অনুমতি দিয়ক।",
    "objects.cameraLive": "কেমেৰা চলি আছে — বস্তুটো মাজত ৰাখক, তাৰপিছত ফটো লওক টিপক।",
    "location.getting": "বৰ্তমান অৱস্থান পোৱা হৈছে…",
    "location.accurateTo": "নিখুঁততা প্ৰায়",
    "location.phonesNote": "সঁচা জিপিএছ থকা ফোনবোৰ লেপটপতকৈ বহুত বেছি নিখুঁত।",
    "location.lastUpdated": "শেষবাৰ আপডেট কৰা হৈছে",
    "location.errorGeneric": "অৱস্থান পাব পৰা নগ'ল।",
    "location.errorDenied": "অৱস্থানৰ অনুমতি অস্বীকাৰ কৰা হৈছে — লাইভ অৱস্থান চাবলৈ অনুমতি দিয়ক।",
    "location.errorUnavailable": "এতিয়া অৱস্থান উপলব্ধ নাই।",
    "location.errorTimeout": "অৱস্থানৰ অনুৰোধৰ সময় শেষ হ'ল।",
    "location.notAvailable": "উপলব্ধ নাই",
    "location.notSupported": "এই ডিভাইচ/ব্ৰাউজাৰত জিঅ\u09cb\u09b2\u09cb\u0995\u09c7\u09b6\u09a8 উপলব্ধ নহয়।",
    "location.refresh": "লাইভ অৱস্থান নবীকৰণ কৰক",
    "trend.green": "উন্নতি হৈ আছে",
    "trend.yellow": "স্থিৰ",
    "trend.red": "মনোযোগ প্ৰয়োজন",
    "chart.pointsThisWeek": "এই সপ্তাহত অৰ্জিত পইণ্ট (কুইজ + গেম)",
    "chart.noActivityWeek": "এই সপ্তাহত এতিয়ালৈকে কাৰ্যকলাপ নাই",
    "chart.pointsLast8Weeks": "যোৱা ৮ সপ্তাহৰ পইণ্ট (কুইজ + গেম)",
    "chart.noActivityMonth": "এই মাহত এতিয়ালৈকে কাৰ্যকলাপ নাই",
    "chart.accuracySpeed": "নিখুঁততা + গতি একেলগে",
    "chart.noActivityWeekQG": "এই সপ্তাহত কুইজ বা গেমৰ কাৰ্যকলাপ নাই",
    "section.progress": "উন্নতি",
    "section.schedule": "সময়সূচী",
    "section.safety": "সুৰক্ষা আৰু দ্ৰুত কাৰ্য",
    "chart.title": "স্মৃতি আৰু মনত পেলোৱা উন্নতি",
    "chart.subtitle": "কুইজৰ ফলাফলৰ ওপৰত ভিত্তি কৰি",
    "chart.shortTerm": "চুটি সময়ৰ",
    "chart.longTerm": "দীৰ্ঘ সময়ৰ",
    "chart.brainAccuracy": "মগজুৰ নিখুঁততা",
    "recognize.subtitle": "কেমেৰাটো তেওঁলোকৰ ফালে দিয়ক আৰু স্কেন টিপক।",
    "recognize.searchPeople": "মানুহ বিচাৰক",
    "recognize.scanBtn": "এই ব্যক্তিজনক স্কেন কৰক",
    "timetable.subtitle": "দৈনিক কাৰ্যসূচী — যোগ কৰক, সম্পাদনা কৰক, আৰু প্ৰতিটো কাম নিশ্চিত কৰক।",
    "timetable.addTask": "কাম যোগ কৰক",
    "events.subtitle": "এবাৰৰ ৰিমাইণ্ডাৰ — সাক্ষাৎ, জন্মদিন আৰু অধিক।",
    "events.addEvent": "ঘটনা যোগ কৰক",
    "objects.subtitle": "বস্তুৰ ফটো তুলি আপুনি ক'ত ৰাখিছে টুকি ৰাখক।",
    "objects.search": "বিচাৰক",
    "objects.takePhoto": "ফটো লওক",
    "common.loading": "ল'ড হৈছে…",
    "quiz.nextIn": "পৰৱৰ্তী",
    "quiz.level": "স্তৰ:",
    "quiz.catchingUpOn": "পূৰণ কৰি আছে",
    "diff.easy": "সহজ",
    "diff.medium": "মধ্যম",
    "diff.hard": "কঠিন",
    "diff.personal": "ব্যক্তিগত",
    "diff.orientation": "অভিমুখীকৰণ",
    "dayDetail.notAttempted": "চেষ্টা কৰা নাই",
    "dayDetail.correct": "শুদ্ধ",
    "dayDetail.incorrect": "ভুল",
    "dayDetail.correctAnswer": "শুদ্ধ উত্তৰ:",
    "quiz.notQuite": "সঠিক নহয় — শুদ্ধ উত্তৰ আছিল",
    "game.notAvailable": "এতিয়াও উপলব্ধ নহয়",
    "game.alreadyCompleted": "আপুনি ইতিমধ্যে এইটো সম্পূৰ্ণ কৰিছে — বহুত ভাল!",
    "game.alreadyPlayed": "আপুনি ইতিমধ্যে এই ৰাউণ্ড খেলিছে।",
    "game.tracedPrefix": "আপুনি অংকন কৰিলে",
    "game.tracedSuffix": "! বহুত ভাল।",
    "game.wonderful": "চমৎকাৰ! আপুনি অৰ্জন কৰিলে",
    "game.point": "পইণ্ট",
    "game.points": "পইণ্ট",
    "game.notQuitePrefix": "সঠিক নহয় — উত্তৰ আছিল",
    "game.niceTry": "ভাল চেষ্টা!",
    "game.goodEffort": "ভাল প্ৰচেষ্টা! পৰৱৰ্তীলৈ যাওক।",
    "quiz.correctFeedback": "শুদ্ধ! আপুনি অৰ্জন কৰিলে",
    "quiz.pointsWord": "পইণ্ট",
    "quiz.of": "ৰ",
    "quiz.correctWord": "শুদ্ধ",
    "quiz.comeBack": "উভতি আহক",
    "quiz.tomorrow": "কাইলৈ",
    "quiz.nextWeek": "অহা সপ্তাহত",
    "quiz.forNewSet": "এটা নতুন ছেটৰ বাবে",
    "game.pointsExclaim": "পইণ্ট!",
    "game.seeYouTomorrow": "নতুন খেলৰ বাবে অহা দেওবাৰে লগ পাম!",
    "quiz.tabDaily": "আজিৰ কুইজ",
    "quiz.tabGame": "আজিৰ গেম",
    "quiz.historyBtn": "ইতিহাস",
    "quiz.doneForNow": "এতিয়াৰ বাবে সম্পূৰ্ণ",
    "history.title": "দৈনিক ইতিহাস",
    "history.subtitle": "কোনবোৰ দিন সম্পূৰ্ণ কৰিছে চাওক — বাদ পৰাবোৰ সম্পূৰ্ণ কৰক।",
    "quiz.backToQuiz": "কুইজলৈ উভতি যাওক",
    "dayDetail.legend": "সেউজীয়া = শুদ্ধ, ৰঙা = ভুল, মটীয়া = চেষ্টা কৰা নাই।",
    "quiz.quizWord": "কুইজ",
    "dayDetail.backToHistory": "ইতিহাসলৈ উভতি যাওক",
    "intro.subtitle": "স্মৃতিত থকা সকলো বস্তু, ই কিহৰ বাবে, আৰু ইয়াক কেনেকৈ ব্যৱহাৰ কৰিব।",
    "intro.gotIt": "বুজিলোঁ",
    "intro.recognizePerson.title": "এজন ব্যক্তিক চিনাক্ত কৰক",
    "intro.recognizePerson.where": "ডেশ্বব'ৰ্ড, আপোনাৰ প্ৰগতি চাৰ্টৰ কাষত",
    "intro.recognizePerson.desc": "কোনোবাৰ ফালে কেমেৰা কৰি স্কেন টিপি তেওঁৰ নাম, আপোনাৰ সৈতে সম্পৰ্ক, আৰু যিকোনো স্মৃতি টোকা চাওক। যদি তেওঁক এতিয়াও চিনাক্ত কৰা হোৱা নাই, আপুনি তাতেই ফটোৰ সৈতে যোগ কৰিব পাৰে। মানুহ বিচাৰক টিপি পঞ্জীয়ন কৰা সকলোকে প্ৰকৃত ফটোৰ সৈতে চাওক।",
    "intro.timetable.title": "আজিৰ সময়সূচী",
    "intro.timetable.where": "ডেশ্বব'ৰ্ড, চিডিউল খণ্ড",
    "intro.timetable.desc": "আপোনাৰ দৈনিক জীৱনচৰ্যা -- আহাৰ, ঔষধ, গা ধোৱা, আৰু অধিক। প্ৰতিটো কামৰ সময় থাকে, শব্দ সোঁৱৰণীৰ সৈতে। কৰাৰ পিছত নিশ্চিত কৰক টিপক, টিক চিহ্ন লৎ; বাদ পৰিলে ক্ৰছ দেখুৱাব। যিকোনো সময়তে কাম যোগ, সম্পাদনা, বা মচিব পাৰে।",
    "intro.events.title": "গুৰুত্বপূৰ্ণ ঘটনা",
    "intro.events.where": "ডেশ্বব'ৰ্ড, সময়সূচীৰ কাষত",
    "intro.events.desc": "এবাৰৰ সাক্ষাৎকাৰ, জন্মদিন, বা তাৰিখ যোগ কৰক। বাছনি কৰা সময়ত শব্দ সতৰ্কবাণী পাব। দেখাৰ পিছত ঠিক আছে টিপক, ঘটনা স্বয়ংক্ৰিয়ভাৱে মচি যাব।",
    "intro.quizGames.title": "কুইজ আৰু গেম",
    "intro.quizGames.where": "ওপৰত থকা কুইজ আৰু গেম বুটাম, বা সাপ্তাহিক স্কোৰ কাৰ্ড টিপক",
    "intro.quizGames.desc": "মনটো সক্ৰিয় ৰাখিবলৈ প্ৰতিদিনে এটা কুইজ, বেলেগ মিনি-গেম। কাৰ্যদক্ষতাৰ ওপৰত নিৰ্ভৰ কৰি প্ৰশ্ন সহজ বা কঠিন হয়। কোনবোৰ দিন সম্পূৰ্ণ কৰিছে চাবলৈ ইতিহাস বুটাম ব্যৱহাৰ কৰক, বাদ পৰাবোৰ পূৰণ কৰক।",
    "intro.findThings.title": "মোৰ বস্তু বিচাৰক",
    "intro.findThings.where": "ডেশ্বব'ৰ্ড, বৰ্তমান অৱস্থানৰ কাষত",
    "intro.findThings.desc": "এটা বস্তুৰ ফটো তুলি কত ৰাখিছে টোকা কৰক, যেনে পাৰ্টী কোট আলমাৰীৰ ওপৰৰ থাকত। পিছত বিচাৰক টিপি প্ৰকৃত ফটোৰ সৈতে ব্ৰাউজ কৰক, বা নাম স্থানৰ দ্বাৰা বিচাৰক।",
    "intro.location.title": "বৰ্তমান অৱস্থান",
    "intro.location.where": "ডেশ্বব'ৰ্ড",
    "intro.location.desc": "আপোনাৰ ডিভাইচৰ GPS ব্যৱহাৰ কৰি প্ৰত্যক্ষ মানচিত্ৰত প্ৰকৃত অৱস্থান দেখুৱায়। আপডেট কৰিবলৈ প্ৰত্যক্ষ অৱস্থান ৰিফ্ৰেছ কৰক টিপক -- যত্নকাৰীৰ বাবে উপযোগী।",
    "intro.profile.title": "প্ৰ'ফাইল",
    "intro.profile.where": "ওপৰত থকা প্ৰ'ফাইল বুটাম",
    "intro.profile.desc": "আপোনাৰ বিৱৰণ, যত্নকাৰীৰ যোগাযোগ, চুবুৰীয়াৰ ফোন নম্বৰ। জৰুৰীকালীন স্ক্ৰীনত সঠিক নম্বৰ থাকিবলৈ আপডেট কৰি ৰাখক।",
    "intro.emergency.title": "জৰুৰীকালীন এছঅ'এছ",
    "intro.emergency.where": "ৰঙা এছঅ'এছ বুটাম, তলৰ সোঁফালৰ চুকত",
    "intro.emergency.desc": "এটা প্ৰকৃত জৰুৰীকালীন অৱস্থাৰ বাবে। এটা টিপত আৰক্ষী, চিকিৎসা, অগ্নি নিৰ্বাপক, যত্নকাৰী, চুবুৰীয়াৰ নম্বৰ দেখুৱায়, লগে লগে কল কৰিবলৈ সাজু, WhatsApp বাৰ্তাও।",
    "intro.askSmriti.title": "স্মৃতিক সোধক",
    "intro.askSmriti.where": "বেঙুনীয়া স্মৃতিক সোধক বুটাম, তলৰ বাঁওফালৰ চুকত",
    "intro.askSmriti.desc": "এটা প্ৰশ্ন টাইপ কৰক বা কওক -- এপ, দিন, আলজেইমাৰ যত্ন সম্পৰ্কে। ই প্ৰকৃত কাম, মানুহ, ঘটনা চাব পাৰে, নতুন কামো যোগ কৰিব পাৰে। ইংৰাজী, হিন্দী, হিংলিশত কাম কৰে।",
    "assistant.title": "স্মৃতিক সোধক",
    "assistant.subtitle": "এপ, আপোনাৰ দিন, আলজেইমাৰ যত্ন সম্পৰ্কে সোধক।",
    "assistant.listening": "শুনি আছোঁ…",
    "assistant.inputPlaceholder": "প্ৰশ্ন টাইপ কৰক…",
    "assistant.disclaimer": "এইটো চিকিৎসা পৰামৰ্শৰ বিকল্প নহয়। জৰুৰীৰ বাবে এছঅ'এছ বুটাম ব্যৱহাৰ কৰক।",
    "assistant.greeting": "নমস্কাৰ, মই স্মৃতি সহায়ক। মোক এপ, আজিৰ জীৱনচৰ্যা, আলজেইমাৰ যত্ন সম্পৰ্কে সোধক।",
    "assistant.thinking": "চিন্তা কৰি আছোঁ…",
    "emergency.sending": "এলাৰ্ট পঠিওৱা হৈছে…",
    "emergency.alertSent": "এলাৰ্ট পঠিওৱা হ'ল",
    "emergency.notified": "ক অৱগত কৰা হৈছে।",
    "emergency.caretakerNotified": "আপোনাৰ যত্নকাৰীক অৱগত কৰা হৈছে।",
    "emergency.moreAlertsPrefix": "আপুনি পঠিয়াব পাৰে",
    "emergency.moreAlertsSuffix": "প্ৰয়োজন হ'লে এই ঘণ্টাত অধিক এলাৰ্ট।",
    "emergency.couldNotSend": "সেই এলাৰ্ট পঠিয়াব পৰা নগ'ল",
    "emergency.police": "আৰক্ষী",
    "emergency.medical": "চিকিৎসা সহায়",
    "emergency.fire": "অগ্নি নিৰ্বাপক",
    "emergency.caretaker": "যত্নকাৰী",
    "emergency.neighbour": "চুবুৰীয়া",
    "emergency.notSetYet": "এতিয়াও ছেট কৰা হোৱা নাই",
    "emergency.call": "কল কৰক",
    "emergency.message": "বাৰ্তা",
    "emergency.addInProfile": "প্ৰ'ফাইলত যোগ কৰক",
    "form.task": "কাম",
    "form.taskPlaceholder": "যেনে ৰাতিপুৱাৰ ঔষধ, গা ধোৱা, দুপৰীয়াৰ আহাৰ",
    "form.from": "ৰ পৰা",
    "form.to": "লৈ",
    "form.cancel": "বাতিল কৰক",
    "form.saveTask": "কাম সংৰক্ষণ কৰক",
    "form.event": "ঘটনা",
    "form.eventPlaceholder": "যেনে ডঃ মেহতা – পৰীক্ষা, নাতিৰ জন্মদিন",
    "form.date": "তাৰিখ",
    "form.time": "সময়",
    "form.saveEvent": "ঘটনা সংৰক্ষণ কৰক",
    "objects.whatIsIt": "এইটো কি?",
    "objects.namePlaceholder": "যেনে পাৰ্টী কোট, বীমা ফাইল",
    "objects.whereDidYouPutIt": "আপুনি ইয়াক কত ৰাখিছে?",
    "objects.locationPlaceholder": "যেনে আলমাৰীৰ ওপৰৰ অংশ, ৰন্ধনশালৰ কেবিনেট",
    "objects.retakePhoto": "ফটো পুনৰ তোলক",
    "objects.save": "সংৰক্ষণ কৰক",
    "quiz.modalTitle": "কুইজ আৰু গেম",
    "quiz.modalSubtitle": "প্ৰতিদিনে নতুন প্ৰশ্নৰ ছেট — পইণ্ট অৰ্জন কৰিবলৈ উত্তৰ দিয়ক।",
    "history.analyze": "বিশ্লেষণ কৰক",
    "history.play": "খেলক",
    "landing.eyebrow": "এটা স্মৃতি যত্ন সংগী",
    "landing.title1": "কিছুমান সম্পৰ্ক ম্লান হয়।",
    "landing.title2": "আমি আপোনাক সেইবোৰ ধৰি ৰাখাত সহায় কৰোঁ।",
    "landing.sub": "স্মৃতিয়ে আলজেইমাৰৰ সৈতে জীয়াই থকা মানুহক দিশনিৰ্ণয়িত, সুৰক্ষিত আৰু সংলগ্ন থাকিবলৈ সহায় কৰে — আৰু তেওঁলোকৰ যত্ন লোৱা মানুহক প্ৰতিদিনে চোৱাচিতা কৰিবলৈ এটা স্পষ্ট স্থান দিয়ে।",
    "landing.loginBtn": "মুখ স্কেনৰ সৈতে লগইন কৰক",
    "landing.registerBtn": "আহক আপোনাক সুস্থ কৰোঁ — পঞ্জীয়ন কৰক",
    "landing.howSmritiHelps": "স্মৃতিয়ে কেনেকৈ সহায় কৰে",
    "landing.feature1.title": "স্মৃতি সহায়ক",
    "landing.feature1.desc": "দৈনিক জীৱনচৰ্যা, ঔষধৰ সোঁৱৰণী, আৰু পৰিয়াল বন্ধুৰ ফটো স্মৃতি বেংক, অনুৰোধত মনত পেলাবলৈ সাজু।",
    "landing.feature2.title": "কোমল অনুশীলন",
    "landing.feature2.desc": "মনটো সংলগ্ন ৰাখিবলৈ ডিজাইন কৰা, কঠিনতাত খাপ খোৱা চুটি স্মৰণ খেল আৰু শব্দ সংযোগ কাম।",
    "landing.feature3.title": "সুৰক্ষা আৰু পৰ্যবেক্ষণ",
    "landing.feature3.desc": "সদায় এটা টিপৰ দূৰত্বত জৰুৰীকালীন সম্পৰ্ক, আৰু এক পলকতে ৰুটিন অনুসৰণ দেখুৱা যত্নকাৰী ডেশ্ববোৰ্ড।",
    "landing.feature4.title": "মুখ-স্কেন প্ৰৱেশ",
    "landing.feature4.desc": "পাহৰিবলৈ পাছৱৰ্ড নাই। এটা দ্ৰুত মুখ স্কেনে ৰোগীক পোনপটীয়াকৈ তেওঁৰ নিজৰ ডেশ্ববোৰ্ডলৈ লৈ যায়।",
    "landing.readyTitle": "আৰম্ভ কৰিবলৈ সাজু?",
    "landing.readySub": "পঞ্জীয়নত প্ৰায় পাঁচ মিনিট লাগে আৰু ইয়াত ৰোগী আৰু তেওঁৰ যত্নকাৰী দুয়োকে অন্তৰ্ভুক্ত কৰে।",
    "landing.haveAccount": "মোৰ ইতিমধ্যে এটা একাউণ্ট আছে",
    "dashboard.welcome": "স্বাগতম,",
    "dashboard.back": "উভতি",
    "dashboard.welcomeCaretakerOf": "স্বাগতম — যত্নকাৰী",
    "dashboard.yourPatient": "আপোনাৰ ৰোগী",
    "brand.smriti": "স্মৃতি",
    "enum.male": "পুৰুষ",
    "enum.female": "মহিলা",
    "enum.other": "অন্য",
    "enum.shortTerm": "চুটি-কালীন",
    "enum.longTerm": "দীৰ্ঘ-কালীন",
    "enum.both": "দুয়োটাই",
    "enum.family": "পৰিয়াল",
    "enum.friend": "বন্ধু",
    "enum.relative": "আত্মীয়",
    "cond.hearing": "শ্ৰৱণ ত্ৰুটি",
    "cond.speech": "কথন ত্ৰুটি",
    "cond.mobility": "চলাচল ত্ৰুটি",
    "cond.vision": "দৃষ্টি ত্ৰুটি",
    "cond.diabetes": "ডায়েবিটিছ",
    "cond.hypertension": "উচ্চ ৰক্তচাপ",
    "reg.pageTitle": "আহক আপোনাক সুস্থ কৰোঁ",
    "reg.intro": "ৰোগী আৰু তেওঁৰ যত্নকাৰীৰ বিষয়ে আমাক কওক। ইয়াত প্ৰায় পাঁচ মিনিট লাগে।",
    "reg.patientHint": "স্মৃতি হ্ৰাসৰ সৈতে জীয়াই থকা ব্যক্তিৰ বিষয়ে মৌলিক তথ্য।",
    "reg.caretakerHint": "কোনে ৰোগীৰ দৈনিক যত্ন লৈ আছে।",
    "reg.fullName": "সম্পূৰ্ণ নাম",
    "reg.age": "বয়স",
    "reg.gender": "লিংগ",
    "reg.memoryLossType": "স্মৃতি হ্ৰাসৰ প্ৰকাৰ",
    "reg.onsetDate": "ৰোগ আৰম্ভ হোৱা তাৰিখ",
    "reg.underObservation": "ৰোগী বৰ্তমান পেছাদাৰী পৰ্যবেক্ষণৰ অধীনত আছেনে?",
    "reg.facilityLocation": "চিকিৎসালয় / সুবিধাৰ স্থান",
    "reg.homeAddress": "ঘৰৰ ঠিকনা",
    "reg.connectionType": "সম্পৰ্কটো কি ভালদৰে বৰ্ণনা কৰে?",
    "reg.hoursAvailable": "24 ঘণ্টাত ৰোগীৰ সৈতে উপলব্ধ ঘণ্টা (1–24)",
    "reg.phoneNumber": "ফোন নম্বৰ",
    "reg.relationWithPatient": "ৰোগীৰ সৈতে সম্পৰ্ক",
    "reg.caretakerAddress": "যত্নকাৰীৰ ঠিকনা",
    "reg.sameAsPatient": "ৰোগীৰ দৰেই",
    "reg.differentLocation": "বেলেগ স্থান",
    "reg.yes": "হয়",
    "reg.no": "নহয়",
    "reg.name": "নাম",
    "reg.howLongKnown": "ৰোগীয়ে তেওঁলোকক কিমান দিনৰ পৰা চিনি পায়?",
    "login.welcomeBack": "পুনৰ স্বাগতম",
    "login.subtext": "ৰোগী ডেশ্ববোৰ্ডত প্ৰৱেশ কৰিবলৈ আপোনাৰ মুখ স্কেন কৰক।",
    "login.patientTab": "ৰোগী",
    "login.caretakerTab": "যত্নকাৰী",
    "login.scanBtn": "স্কেন কৰক আৰু লগইন কৰক",
    "login.newHere": "ইয়াত নতুন?",
    "login.registerInstead": "তাৰ পৰিৱৰ্তে পঞ্জীয়ন কৰক",
    "profile.photo": "প্ৰ'ফাইল ফটো",
    "profile.patientDetails": "ৰোগীৰ বিৱৰণ",
    "profile.editableDetails": "সম্পাদনাযোগ্য বিৱৰণ",
    "profile.caretakerDetails": "যত্নকাৰীৰ বিৱৰণ",
    "profile.changeCaretaker": "যত্নকাৰী সলনি কৰক",
    "profile.changePhoto": "ফটো সলনি কৰক",
    "profile.registerNewCaretaker": "এজন নতুন যত্নকাৰী পঞ্জীয়ন কৰক",
    "profile.unusualActivities": "অস্বাভাৱিক পুনৰাবৃত্তি কাৰ্যকলাপ",
    "profile.relationToPatient": "ৰোগীৰ সৈতে সম্পৰ্ক",
    "profile.otherConditions": "অন্য অৱস্থা",
    "profile.contactNumber": "যোগাযোগ নম্বৰ",
    "profile.diseaseOnset": "ৰোগৰ আৰম্ভণি",
    "profile.subtitle": "ৰোগী আৰু যত্নকাৰীৰ বিৱৰণ চাওক আৰু আপডেট কৰক।",
    "profile.backToDashboard": "ডেশ্ববোৰ্ডলৈ উভতি যাওক",
    "recognize.searchPlaceholder": "নাম, সম্পৰ্ক, বা সংযোগৰ দ্বাৰা বিচাৰক…",
    "recognize.backToScan": "স্কেনলৈ উভতি যাওক",
    "reg.relation": "সম্পৰ্ক",
    "location.nearbyHospital": "চিকিৎसालয়",
    "location.nearbyPharmacy": "ঔষধালয়",
    "location.nearbyPolice": "আৰক্ষী",
    "chart.byGame": "গেমৰ দ্বাৰা",
    "chart.byGameSubtitle": "প্ৰতি গেমৰ নিখুঁততা, যোৱা 7 দিন",
    "chart.noGamesYet": "যোৱা 7 দিনত কোনো গেম খেলা হোৱা নাই।",
    "nav.logout": "লগ আউট",
  },
  mr: {
    "dashboard.subGreeting": "\u0924\u0941\u092e\u091a\u094d\u092f\u093e \u0926\u093f\u0935\u0938\u093e\u091a\u093e \u090f\u0915 \u0906\u0922\u093e\u0935\u093e.",
    "nav.profile": "\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932", "nav.quizGames": "\u0915\u094d\u0935\u093f\u091d \u0906\u0923\u093f \u0916\u0947\u0933",
    "nav.emergency": "\u0906\u0923\u0940\u092c\u093e\u0923\u0940 \u092e\u0926\u0924", "nav.sos": "\u090f\u0938\u0913\u090f\u0938",
    "nav.knowApp": "\u0905\u200d\u0945\u092a\u092c\u0926\u094d\u0926\u0932 \u091c\u093e\u0923\u0942\u0928 \u0918\u094d\u092f\u093e", "nav.askSmriti": "\u0938\u094d\u092e\u0943\u0924\u0940\u0932\u093e \u0935\u093f\u091a\u093e\u0930\u093e",
    "stat.tasksToday": "\u0906\u091c \u092a\u0942\u0930\u094d\u0923 \u091d\u093e\u0932\u0947\u0932\u0940 \u0915\u093e\u092e\u0947",
    "stat.quizGamesWeek": "\u092f\u093e \u0906\u0920\u0935\u0921\u094d\u092f\u093e\u0924\u0940\u0932 \u0915\u094d\u0935\u093f\u091d \u0906\u0923\u093f \u0916\u0947\u0933 \u0905\u091a\u0942\u0915\u0924\u093e \u2014 \u0916\u0947\u0933\u0923\u094d\u092f\u093e\u0938\u093e\u0920\u0940 \u091f\u0945\u092a \u0915\u0930\u093e",
    "panel.timetable": "\u0906\u091c\u091a\u0947 \u0935\u0947\u0933\u093e\u092a\u0924\u094d\u0930\u0915", "panel.events": "\u092e\u0939\u0924\u094d\u0924\u094d\u0935\u093e\u091a\u0947 \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e \u0906\u0923\u093f \u0924\u093e\u0930\u0916\u093e",
    "panel.location": "\u0938\u0927\u094d\u092f\u093e\u091a\u0947 \u0938\u094d\u0925\u093e\u0928", "panel.findThings": "\u092e\u093e\u091d\u094d\u092f\u093e \u0935\u0938\u094d\u0924\u0942 \u0936\u094b\u0927\u093e",
    "panel.recognizePerson": "\u0935\u094d\u092f\u0915\u094d\u0924\u0940\u0932\u093e \u0913\u0933\u0916\u093e", "intro.title": "\u0905\u200d\u0945\u092a\u092c\u0926\u094d\u0926\u0932 \u091c\u093e\u0923\u0942\u0928 \u0918\u094d\u092f\u093e",
    "stat.allDone": "सर्व पूर्ण",
    "stat.left": "बाकी",
    "stat.noTasksYet": "अजून कामे नाहीत",
    "stat.noneScheduled": "काहीही ठरलेले नाही",
    "stat.nothingLeftToday": "आज काहीही बाकी नाही",
    "stat.quizLabel": "क्विझ",
    "stat.gamesLabel": "खेळ",
    "stat.pts": "गुण",
    "stat.noDataYet": "अजून डेटा नाही",
    "stat.upcomingEvent": "आगामी कार्यक्रम",
    "stat.nextTask": "पुढील काम",
    "timetable.empty": "अजून कामे नाहीत — दैनंदिन वेळापत्रक तयार करण्यासाठी काम जोडा दाबा.",
    "events.empty": "अजून कार्यक्रम नाहीत — भेटी, वाढदिवस जोडण्यासाठी कार्यक्रम जोडा दाबा.",
    "camera.live": "कॅमेरा सुरू आहे — तुमचा चेहरा मध्यभागी ठेवा, नंतर स्कॅन दाबा.",
    "camera.permissionNeeded": "सुरू ठेवण्यासाठी कॅमेरा परवानगी आवश्यक आहे. कृपया परवानगी द्या.",
    "objects.cameraLive": "कॅमेरा सुरू आहे — वस्तू मध्यभागी ठेवा, नंतर फोटो घ्या दाबा.",
    "location.getting": "सध्याचे स्थान मिळवत आहे…",
    "location.accurateTo": "अचूकता अंदाजे",
    "location.phonesNote": "खऱ्या जीपीएससह फोन लॅपटॉपपेक्षा खूप अचूक असतात.",
    "location.lastUpdated": "शेवटचे अद्यतनित",
    "location.errorGeneric": "स्थान मिळू शकले नाही.",
    "location.errorDenied": "स्थान परवानगी नाकारली — थेट स्थान पाहण्यासाठी परवानगी द्या.",
    "location.errorUnavailable": "सध्या स्थान उपलब्ध नाही.",
    "location.errorTimeout": "स्थान विनंतीची वेळ संपली.",
    "location.notAvailable": "उपलब्ध नाही",
    "location.notSupported": "या डिव्हाइस/ब्राउझरवर जिओलोकेशन उपलब्ध नाही.",
    "location.refresh": "थेट स्थान रिफ्रेश करा",
    "trend.green": "सुधारत आहे",
    "trend.yellow": "स्थिर",
    "trend.red": "लक्ष देण्याची गरज",
    "chart.pointsThisWeek": "या आठवड्यात मिळवलेले गुण (क्विझ + खेळ)",
    "chart.noActivityWeek": "या आठवड्यात अजून काही क्रियाकलाप नाही",
    "chart.pointsLast8Weeks": "मागील 8 आठवड्यांचे गुण (क्विझ + खेळ)",
    "chart.noActivityMonth": "या महिन्यात अजून काही क्रियाकलाप नाही",
    "chart.accuracySpeed": "अचूकता + वेग एकत्रित",
    "chart.noActivityWeekQG": "या आठवड्यात क्विझ किंवा खेळाचा क्रियाकलाप नाही",
    "section.progress": "प्रगती",
    "section.schedule": "वेळापत्रक",
    "section.safety": "सुरक्षा आणि जलद कृती",
    "chart.title": "स्मृती आणि आठवण प्रगती",
    "chart.subtitle": "क्विझच्या निकालांवर आधारित",
    "chart.shortTerm": "अल्पकालीन",
    "chart.longTerm": "दीर्घकालीन",
    "chart.brainAccuracy": "मेंदूची अचूकता",
    "recognize.subtitle": "कॅमेरा त्यांच्याकडे धरा आणि स्कॅन दाबा.",
    "recognize.searchPeople": "लोक शोधा",
    "recognize.scanBtn": "या व्यक्तीला स्कॅन करा",
    "timetable.subtitle": "दैनंदिन वेळापत्रक — जोडा, संपादित करा, आणि प्रत्येक कामाची पुष्टी करा.",
    "timetable.addTask": "काम जोडा",
    "events.subtitle": "एकदाच्या आठवणी — भेटी, वाढदिवस आणि बरेच काही.",
    "events.addEvent": "कार्यक्रम जोडा",
    "objects.subtitle": "वस्तूचा फोटो घ्या आणि ती कुठे ठेवली ते नोंदवा.",
    "objects.search": "शोधा",
    "objects.takePhoto": "फोटो घ्या",
    "common.loading": "लोड होत आहे…",
    "quiz.nextIn": "पुढील",
    "quiz.level": "स्तर:",
    "quiz.catchingUpOn": "भरून काढत आहे",
    "diff.easy": "सोपे",
    "diff.medium": "मध्यम",
    "diff.hard": "कठीण",
    "diff.personal": "वैयक्तिक",
    "diff.orientation": "अभिमुखता",
    "dayDetail.notAttempted": "प्रयत्न केला नाही",
    "dayDetail.correct": "बरोबर",
    "dayDetail.incorrect": "चूक",
    "dayDetail.correctAnswer": "बरोबर उत्तर:",
    "quiz.notQuite": "बरोबर नाही — योग्य उत्तर होते",
    "game.notAvailable": "अद्याप उपलब्ध नाही",
    "game.alreadyCompleted": "तुम्ही हे आधीच पूर्ण केले आहे — छान!",
    "game.alreadyPlayed": "तुम्ही ही फेरी आधीच खेळला आहात.",
    "game.tracedPrefix": "तुम्ही रेखाटले",
    "game.tracedSuffix": "! छान.",
    "game.wonderful": "छान! तुम्ही मिळवले",
    "game.point": "गुण",
    "game.points": "गुण",
    "game.notQuitePrefix": "बरोबर नाही — उत्तर होते",
    "game.niceTry": "छान प्रयत्न!",
    "game.goodEffort": "छान प्रयत्न! पुढच्याकडे जाऊया.",
    "quiz.correctFeedback": "बरोबर! तुम्ही मिळवले",
    "quiz.pointsWord": "गुण",
    "quiz.of": "पैकी",
    "quiz.correctWord": "बरोबर",
    "quiz.comeBack": "परत या",
    "quiz.tomorrow": "उद्या",
    "quiz.nextWeek": "पुढच्या आठवड्यात",
    "quiz.forNewSet": "नवीन संचासाठी",
    "game.pointsExclaim": "गुण!",
    "game.seeYouTomorrow": "नवीन खेळासाठी पुढच्या रविवारी भेटूया!",
    "quiz.tabDaily": "आजची क्विझ",
    "quiz.tabGame": "आजचा खेळ",
    "quiz.historyBtn": "इतिहास",
    "quiz.doneForNow": "आत्तासाठी झाले",
    "history.title": "दैनिक इतिहास",
    "history.subtitle": "तुम्ही कोणते दिवस पूर्ण केले ते पहा — आणि चुकलेले पूर्ण करा.",
    "quiz.backToQuiz": "क्विझकडे परत जा",
    "dayDetail.legend": "हिरवा = बरोबर, लाल = चूक, राखाडी = प्रयत्न केला नाही.",
    "quiz.quizWord": "क्विझ",
    "dayDetail.backToHistory": "इतिहासाकडे परत जा",
    "intro.subtitle": "स्मृतीमधील सर्व काही, ते कशासाठी आहे आणि ते कसे वापरायचे.",
    "intro.gotIt": "समजले",
    "intro.recognizePerson.title": "व्यक्ती ओळखा",
    "intro.recognizePerson.where": "डॅशबोर्ड, तुमच्या प्रगती चार्टजवळ",
    "intro.recognizePerson.desc": "एखाद्याकडे कॅमेरा दाखवा आणि स्कॅन टॅप करून त्यांचे नाव, तुमच्याशी नाते आणि आठवणी टिपा पहा. जर ते ओळखले गेले नसतील, तर तिथेच फोटोसह जोडा. लोक शोधा टॅप करून नोंदणी केलेल्या सर्वांना खऱ्या फोटोंसह पहा.",
    "intro.timetable.title": "आजचे वेळापत्रक",
    "intro.timetable.where": "डॅशबोर्ड, वेळापत्रक विभाग",
    "intro.timetable.desc": "तुमची दैनंदिन दिनचर्या -- जेवण, औषध, आंघोळ आणि बरेच काही. प्रत्येक कामाला वेळ असते, आवाजाच्या स्मरणपत्रांसह. केल्यानंतर पुष्टी करा टॅप करा, टिक येईल; चुकवले तर क्रॉस दिसेल. कधीही कामे जोडू, संपादित किंवा हटवू शकता.",
    "intro.events.title": "महत्त्वाचे कार्यक्रम",
    "intro.events.where": "डॅशबोर्ड, वेळापत्रकाशेजारी",
    "intro.events.desc": "एकदाच्या भेटी, वाढदिवस किंवा तारखा जोडा. निवडलेल्या वेळी आवाजाचा इशारा मिळेल. पाहिल्यानंतर ओके टॅप करा, कार्यक्रम आपोआप साफ होईल.",
    "intro.quizGames.title": "क्विझ आणि खेळ",
    "intro.quizGames.where": "वरील क्विझ आणि खेळ बटण, किंवा साप्ताहिक स्कोअर कार्डवर टॅप करा",
    "intro.quizGames.desc": "मन सक्रिय ठेवण्यासाठी दररोज एक क्विझ, वेगळा मिनी-गेम. कामगिरीनुसार प्रश्न सोपे किंवा कठीण होतात. कोणते दिवस पूर्ण केले हे पाहण्यासाठी इतिहास बटण वापरा, चुकलेले पूर्ण करा.",
    "intro.findThings.title": "माझ्या वस्तू शोधा",
    "intro.findThings.where": "डॅशबोर्ड, सध्याच्या स्थानाशेजारी",
    "intro.findThings.desc": "एखाद्या वस्तूचा फोटो घ्या आणि ती कुठे ठेवली ते नोंदवा, जसे पार्टी कोट कपाटाच्या वरच्या कप्प्यात. नंतर शोधा टॅप करून खऱ्या फोटोंसह पहा, किंवा नाव किंवा स्थानाने शोधा.",
    "intro.location.title": "सध्याचे स्थान",
    "intro.location.where": "डॅशबोर्ड",
    "intro.location.desc": "तुमच्या डिव्हाइसच्या GPS चा वापर करून लाईव्ह नकाशावर खरे स्थान दाखवते. अपडेट करण्यासाठी लाईव्ह स्थान रिफ्रेश करा टॅप करा -- काळजीवाहकासाठी उपयुक्त.",
    "intro.profile.title": "प्रोफाइल",
    "intro.profile.where": "वरील प्रोफाइल बटण",
    "intro.profile.desc": "तुमचे तपशील, काळजीवाहकाची माहिती, शेजाऱ्याचा फोन नंबर. आणीबाणी स्क्रीनवर योग्य नंबर असावेत यासाठी अद्ययावत ठेवा.",
    "intro.emergency.title": "आणीबाणी एसओएस",
    "intro.emergency.where": "लाल एसओएस बटण, खालच्या उजव्या कोपऱ्यात",
    "intro.emergency.desc": "खऱ्या आणीबाणीसाठी. एका टॅपने पोलीस, वैद्यकीय, अग्निशमन, काळजीवाहक, शेजारी नंबर दाखवते, लगेच कॉल करण्यासाठी तयार, WhatsApp संदेशही.",
    "intro.askSmriti.title": "स्मृतीला विचारा",
    "intro.askSmriti.where": "जांभळे स्मृतीला विचारा बटण, खालच्या डाव्या कोपऱ्यात",
    "intro.askSmriti.desc": "एक प्रश्न टाईप करा किंवा बोला -- अ‍ॅप, दिवस, अल्झायमर काळजीबद्दल. हे खरी कामे, लोक, कार्यक्रम पाहू शकते, नवीन काम देखील जोडू शकते. इंग्रजी, हिंदी किंवा हिंग्लिशमध्ये काम करते.",
    "assistant.title": "स्मृतीला विचारा",
    "assistant.subtitle": "अ‍ॅप, तुमचा दिवस किंवा अल्झायमर काळजीबद्दल विचारा.",
    "assistant.listening": "ऐकत आहे…",
    "assistant.inputPlaceholder": "प्रश्न टाईप करा…",
    "assistant.disclaimer": "हा वैद्यकीय सल्ल्याचा पर्याय नाही. तातडीच्या गोष्टीसाठी एसओएस बटण वापरा.",
    "assistant.greeting": "नमस्कार, मी स्मृती सहाय्यक आहे. मला अ‍ॅप, आजची दिनचर्या किंवा अल्झायमर काळजीबद्दल विचारा.",
    "assistant.thinking": "विचार करत आहे…",
    "emergency.sending": "अलर्ट पाठवले जात आहे…",
    "emergency.alertSent": "अलर्ट पाठवला",
    "emergency.notified": "ला कळवले गेले आहे.",
    "emergency.caretakerNotified": "तुमच्या काळजीवाहकाला कळवले गेले आहे.",
    "emergency.moreAlertsPrefix": "तुम्ही पाठवू शकता",
    "emergency.moreAlertsSuffix": "गरज असल्यास या तासात आणखी अलर्ट.",
    "emergency.couldNotSend": "तो अलर्ट पाठवता आला नाही",
    "emergency.police": "पोलीस",
    "emergency.medical": "वैद्यकीय मदत",
    "emergency.fire": "अग्निशमन",
    "emergency.caretaker": "काळजीवाहक",
    "emergency.neighbour": "शेजारी",
    "emergency.notSetYet": "अद्याप सेट केलेले नाही",
    "emergency.call": "कॉल करा",
    "emergency.message": "संदेश",
    "emergency.addInProfile": "प्रोफाइलमध्ये जोडा",
    "form.task": "काम",
    "form.taskPlaceholder": "उदा. सकाळचे औषध, आंघोळ, दुपारचे जेवण",
    "form.from": "पासून",
    "form.to": "पर्यंत",
    "form.cancel": "रद्द करा",
    "form.saveTask": "काम जतन करा",
    "form.event": "कार्यक्रम",
    "form.eventPlaceholder": "उदा. डॉ. मेहता – तपासणी, नातवाचा वाढदिवस",
    "form.date": "तारीख",
    "form.time": "वेळ",
    "form.saveEvent": "कार्यक्रम जतन करा",
    "objects.whatIsIt": "हे काय आहे?",
    "objects.namePlaceholder": "उदा. पार्टी कोट, विमा फाईल",
    "objects.whereDidYouPutIt": "तुम्ही हे कुठे ठेवले?",
    "objects.locationPlaceholder": "उदा. कपाटाचा वरचा भाग, स्वयंपाकघरातील कपाट",
    "objects.retakePhoto": "फोटो पुन्हा घ्या",
    "objects.save": "जतन करा",
    "quiz.modalTitle": "क्विझ आणि खेळ",
    "quiz.modalSubtitle": "दररोज नवीन प्रश्नांचा संच — गुण मिळवण्यासाठी उत्तर द्या.",
    "history.analyze": "विश्लेषण करा",
    "history.play": "खेळा",
    "landing.eyebrow": "एक स्मृती काळजी सोबती",
    "landing.title1": "काही नाती धूसर होतात.",
    "landing.title2": "ती धरून ठेवण्यास आम्ही तुम्हाला मदत करतो.",
    "landing.sub": "अल्झायमरसह जगणाऱ्या लोकांना दिशादर्शक, सुरक्षित आणि गुंतलेले राहण्यास स्मृती मदत करते — आणि त्यांची काळजी घेणाऱ्यांना दररोज लक्ष ठेवण्यासाठी एक स्पष्ट जागा देते.",
    "landing.loginBtn": "फेस स्कॅनने लॉगिन करा",
    "landing.registerBtn": "आपल्याला बरे करूया — नोंदणी करा",
    "landing.howSmritiHelps": "स्मृती कशी मदत करते",
    "landing.feature1.title": "स्मृती साधने",
    "landing.feature1.desc": "दैनंदिन दिनचर्या, औषध स्मरणपत्रे, आणि कुटुंब मित्रांचा फोटो स्मृती बँक, विनंतीनुसार आठवण्यासाठी तयार.",
    "landing.feature2.title": "सौम्य व्यायाम",
    "landing.feature2.desc": "मन गुंतलेले ठेवण्यासाठी डिझाइन केलेले, कठीणतेत जुळवून घेणारे छोटे स्मरण खेळ आणि शब्द संबंध कामे.",
    "landing.feature3.title": "सुरक्षा आणि देखरेख",
    "landing.feature3.desc": "नेहमी एका टॅप अंतरावर आणीबाणी संपर्क, आणि एका दृष्टीक्षेपात दिनचर्या पालन दाखवणारा काळजीवाहक डॅशबोर्ड.",
    "landing.feature4.title": "फेस-स्कॅन प्रवेश",
    "landing.feature4.desc": "विसरण्यासाठी पासवर्ड नाहीत. एक जलद फेस स्कॅन रुग्णाला थेट त्यांच्या स्वतःच्या डॅशबोर्डवर घेऊन जाते.",
    "landing.readyTitle": "सुरुवात करण्यास तयार?",
    "landing.readySub": "नोंदणीसाठी सुमारे पाच मिनिटे लागतात आणि यात रुग्ण आणि त्यांचा काळजीवाहक दोघांचा समावेश आहे.",
    "landing.haveAccount": "माझे आधीच खाते आहे",
    "dashboard.welcome": "स्वागत आहे,",
    "dashboard.back": "परत",
    "dashboard.welcomeCaretakerOf": "स्वागत आहे — काळजीवाहक",
    "dashboard.yourPatient": "तुमचा रुग्ण",
    "brand.smriti": "स्मृती",
    "enum.male": "पुरुष",
    "enum.female": "स्त्री",
    "enum.other": "इतर",
    "enum.shortTerm": "अल्पकालीन",
    "enum.longTerm": "दीर्घकालीन",
    "enum.both": "दोन्ही",
    "enum.family": "कुटुंब",
    "enum.friend": "मित्र",
    "enum.relative": "नातेवाईक",
    "cond.hearing": "श्रवण दोष",
    "cond.speech": "बोलण्यातील दोष",
    "cond.mobility": "हालचाल दोष",
    "cond.vision": "दृष्टी दोष",
    "cond.diabetes": "मधुमेह",
    "cond.hypertension": "उच्च रक्तदाब",
    "reg.pageTitle": "आपल्याला बरे करूया",
    "reg.intro": "रुग्ण आणि त्यांच्या काळजीवाहकाबद्दल आम्हाला सांगा. यासाठी सुमारे पाच मिनिटे लागतात.",
    "reg.patientHint": "स्मृती कमी होऊन जगणाऱ्या व्यक्तीबद्दल मूलभूत माहिती.",
    "reg.caretakerHint": "रुग्णाची दररोज कोण काळजी घेत आहे.",
    "reg.fullName": "पूर्ण नाव",
    "reg.age": "वय",
    "reg.gender": "लिंग",
    "reg.memoryLossType": "स्मृती कमी होण्याचा प्रकार",
    "reg.onsetDate": "आजार सुरू झाल्याची तारीख",
    "reg.underObservation": "रुग्ण सध्या व्यावसायिक देखरेखीखाली आहे का?",
    "reg.facilityLocation": "रुग्णालय / सुविधा स्थान",
    "reg.homeAddress": "घराचा पत्ता",
    "reg.connectionType": "नाते कशाने उत्तम वर्णन होते?",
    "reg.hoursAvailable": "24 तासात रुग्णासोबत उपलब्ध तास (1–24)",
    "reg.phoneNumber": "फोन नंबर",
    "reg.relationWithPatient": "रुग्णाशी नाते",
    "reg.caretakerAddress": "काळजीवाहकाचा पत्ता",
    "reg.sameAsPatient": "रुग्णाप्रमाणेच",
    "reg.differentLocation": "वेगळे स्थान",
    "reg.yes": "होय",
    "reg.no": "नाही",
    "reg.name": "नाव",
    "reg.howLongKnown": "रुग्ण त्यांना किती काळापासून ओळखतो?",
    "login.welcomeBack": "पुन्हा स्वागत आहे",
    "login.subtext": "रुग्ण डॅशबोर्डमध्ये प्रवेश करण्यासाठी तुमचा चेहरा स्कॅन करा.",
    "login.patientTab": "रुग्ण",
    "login.caretakerTab": "काळजीवाहक",
    "login.scanBtn": "स्कॅन करा आणि लॉगिन करा",
    "login.newHere": "इथे नवीन आहात?",
    "login.registerInstead": "त्याऐवजी नोंदणी करा",
    "profile.photo": "प्रोफाइल फोटो",
    "profile.patientDetails": "रुग्ण तपशील",
    "profile.editableDetails": "संपादनयोग्य तपशील",
    "profile.caretakerDetails": "काळजीवाहक तपशील",
    "profile.changeCaretaker": "काळजीवाहक बदला",
    "profile.changePhoto": "फोटो बदला",
    "profile.registerNewCaretaker": "नवीन काळजीवाहक नोंदणी करा",
    "profile.unusualActivities": "असामान्य पुनरावृत्ती क्रियाकलाप",
    "profile.relationToPatient": "रुग्णाशी नाते",
    "profile.otherConditions": "इतर परिस्थिती",
    "profile.contactNumber": "संपर्क क्रमांक",
    "profile.diseaseOnset": "आजाराची सुरुवात",
    "profile.subtitle": "रुग्ण आणि काळजीवाहकाचे तपशील पहा आणि अद्ययावत करा.",
    "profile.backToDashboard": "डॅशबोर्डवर परत जा",
    "recognize.searchPlaceholder": "नाव, नाते किंवा संबंधाने शोधा…",
    "recognize.backToScan": "स्कॅनवर परत जा",
    "reg.relation": "नाते",
    "location.nearbyHospital": "रुग्णालय",
    "location.nearbyPharmacy": "औषधालय",
    "location.nearbyPolice": "पोलीस",
    "chart.byGame": "खेळानुसार",
    "chart.byGameSubtitle": "प्रति खेळ अचूकता, गेल्या 7 दिवसांत",
    "chart.noGamesYet": "गेल्या 7 दिवसांत कोणतेही खेळ खेळले नाहीत.",
    "nav.logout": "लॉग आउट",
  },
};

let currentLanguage = "en";

function t(key) {
  return (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) || TRANSLATIONS.en[key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  const label = document.getElementById("lang-switcher-label");
  if (label) label.textContent = LANGUAGE_NAMES[currentLanguage] || "English";
  document.querySelectorAll("#lang-switcher-menu button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === currentLanguage);
  });
}

const LANGUAGE_NAMES = { en: "English", hi: "\u0939\u093f\u0902\u0926\u0940", ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd", te: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41", as: "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be", mr: "\u092e\u0930\u093e\u0920\u0940" };
const LOCALE_TAGS = { en: "en-IN", hi: "hi-IN", ta: "ta-IN", te: "te-IN", as: "as-IN", mr: "mr-IN" };
function currentLocaleTag() { return LOCALE_TAGS[currentLanguage] || "en-IN"; }

/* ================= Navbar clock ================= */
/* Always-visible current date/time, present on every page since the navbar
   is shared. Updates every second; date formatting follows whichever
   language is currently selected. */
function updateNavbarClock() {
  const el = document.getElementById("navbar-clock-text");
  if (!el) return;
  const now = new Date();
  const datePart = now.toLocaleDateString(currentLocaleTag(), { day: "numeric", month: "short" });
  const timePart = now.toLocaleTimeString(currentLocaleTag(), { hour: "2-digit", minute: "2-digit" });
  el.textContent = `${datePart}, ${timePart}`;
}
updateNavbarClock();
setInterval(updateNavbarClock, 1000);

/* ================= Theme toggle (light/dark) ================= */
(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-toggle-icon");
  if (!toggleBtn) return;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    if (icon) icon.className = theme === "dark" ? "ti ti-sun" : "ti ti-moon";
    try { localStorage.setItem("smriti-theme", theme); } catch (err) { /* private browsing etc. -- theme just won't persist */ }
  }

  let saved = null;
  try { saved = localStorage.getItem("smriti-theme"); } catch (err) { /* ignore */ }
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  toggleBtn.addEventListener("click", () => {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();

async function loadLanguagePreference() {
  try {
    const res = await fetch("/api/language");
    const data = await res.json();
    if (data.ok) currentLanguage = data.language;
  } catch (err) {
    // fall back to English if the preference can't be loaded
  }
  applyTranslations();
}

async function setLanguagePreference(lang) {
  currentLanguage = lang;
  applyTranslations();
  updateNavbarClock();
  document.getElementById("lang-switcher-menu").classList.remove("is-open");

  if (document.getElementById("view-dashboard").classList.contains("is-active")) {
    loadTasks();
    loadEvents();
    refreshQuizStat();
    loadGrowthCharts();
    fetchLiveLocation();
  }
  if (document.getElementById("view-profile").classList.contains("is-active")) {
    loadProfile();
  }

  document.querySelectorAll("[data-face-capture]").forEach((container) => {
    if (!container.classList.contains("is-live")) return;
    const statusEl = container.querySelector(".face-capture__status");
    if (!statusEl) return;
    const key = container.getAttribute("data-face-capture");
    statusEl.textContent = key === "object" ? t("objects.cameraLive") : t("camera.live");
  });

  // Same problem inside the Quiz & Games modal: whichever sub-view is open
  // (the quiz itself, the active game, History, or a day's Analyze detail)
  // was rendered once in the old language and won't update on its own.
  if (document.getElementById("quiz-modal").classList.contains("is-open")) {
    if (document.getElementById("quiz-question-area").style.display !== "none" && quizQuestions.length) {
      renderQuizQuestion(quizCurrentIndex);
    }
    if (document.getElementById("quiz-summary").classList.contains("is-visible")) {
      showQuizSummary();
    }
    if (document.getElementById("weekly-games-area").style.display !== "none") {
      if (document.getElementById("weekly-game-summary").style.display !== "none") {
        showWeeklyGameSummary();
      } else if (weeklyGameRounds.length) {
        renderWeeklyGameRound(weeklyGameCurrentIndex);
      }
    }
    if (document.getElementById("quiz-history").classList.contains("is-visible")) {
      loadQuizHistory();
    }
    if (document.getElementById("quiz-day-detail").classList.contains("is-visible")) {
      loadQuizDayDetail(quizDayDetailCurrentDate);
    }
  }

  // Emergency modal: re-render the confirmation/contacts screen if it's open
  if (document.getElementById("emergency-modal").classList.contains("is-open") && lastEmergencyResult) {
    renderEmergencyResult(...lastEmergencyResult);
  }

  // Find My Things search results: refresh empty-state/status text
  if (document.getElementById("object-search-area").style.display !== "none") {
    showObjectSearchView();
  }

  try {
    await fetch("/api/language", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language: lang }),
    });
  } catch (err) {
    // the switch still applies for this page view even if saving fails
  }
}

document.getElementById("lang-switcher-btn").addEventListener("click", () => {
  document.getElementById("lang-switcher-menu").classList.toggle("is-open");
});
document.querySelectorAll("#lang-switcher-menu button").forEach((btn) => {
  btn.addEventListener("click", () => setLanguagePreference(btn.getAttribute("data-lang")));
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-switcher")) document.getElementById("lang-switcher-menu").classList.remove("is-open");
});

loadLanguagePreference();

let isLoggedIn = SERVER_LOGGED_IN; // set true after a successful login/register, false on logout

const VIEW_PATHS = {
  landing: "/",
  register: "/register",
  login: "/login",
  dashboard: "/dashboard",
  profile: "/profile",
};

function showView(name, options) {
  options = options || {};

  // Guard: dashboard and profile require an active login
  if ((name === "dashboard" || name === "profile") && !isLoggedIn) {
    name = "login";
  }

  document.querySelectorAll(".view").forEach((v) => v.classList.remove("is-active"));
  const target = document.getElementById("view-" + name);
  if (target) target.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Keep the address bar in sync so a reload (or a bookmark, or browser
  // back/forward) lands back on this same view instead of the landing page.
  if (!options.skipHistory) {
    const path = VIEW_PATHS[name] || "/";
    if (window.location.pathname !== path) {
      history.pushState({ view: name }, "", path);
    }
  }

  // Start/stop cameras as views change so we don't leave the webcam running in the background
  if (name === "register") {
    goToRegisterStep("patient"); // always start the wizard fresh at step 1
  } else {
    stopCapture("patient");
    stopCapture("caretaker");
  }
  if (name === "login") {
    setLoginRole("patient"); // always default back to patient login
  } else {
    stopCapture("login");
  }
  if (name === "profile" || name === "dashboard") {
    loadProfile();
  }
  if (name === "dashboard") {
    resetRecognizeModal();
    startCapture("recognize");
    closeTaskForm();
    closeEventForm();
    loadTasks();
    loadEvents();
    startTaskScheduler();
    fetchLiveLocation();
    refreshQuizStat();
    loadGrowthCharts();
    showObjectAddView();
  } else {
    stopCapture("recognize");
    stopCapture("object");
  }
  if (name !== "profile") {
    hideChangeCaretakerForm();
  }
}

document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", () => showView(el.getAttribute("data-nav")));
});

// Browser back/forward buttons
window.addEventListener("popstate", (e) => {
  const view = (e.state && e.state.view) || "landing";
  showView(view, { skipHistory: true });
});

/* ================= Face capture (shared by patient / caretaker / login) ================= */
/* The camera runs live for framing/preview, but nothing is captured or sent
   anywhere until the person taps "Scan". On the register page that grabs a
   frame and stores it locally (used when the step advances / form submits).
   On the login page it grabs a frame and immediately tries it against
   /api/login for whichever role is selected. */
const captureState = {};
const capturedFaces = {}; // { patient: dataURL, caretaker: dataURL } -- filled in by Scan clicks

function startCapture(key) {
  const container = document.querySelector(`[data-face-capture="${key}"]`);
  if (!container || captureState[key]?.stream) return;

  const video = container.querySelector("video");
  const statusEl = container.querySelector(".face-capture__status");

  container.classList.remove("is-matched", "is-scanned", "is-busy");

  navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
    .then((stream) => {
      captureState[key] = captureState[key] || {};
      captureState[key].stream = stream;
      video.srcObject = stream;
      return video.play();
    })
    .then(() => {
      container.classList.add("is-live");
      statusEl.textContent = t("camera.live");
    })
    .catch(() => {
      statusEl.textContent = t("camera.permissionNeeded");
    });
}

function stopCapture(key) {
  const state = captureState[key];
  if (state && state.stream) {
    state.stream.getTracks().forEach((t) => t.stop());
    state.stream = null;
  }
  const container = document.querySelector(`[data-face-capture="${key}"]`);
  if (container) container.classList.remove("is-live", "is-busy");
}

/**
 * Grabs the current frame from the given key's live <video> and returns it
 * as a base64 JPEG data URL, or null if the camera isn't ready.
 */
async function grabLiveFrameWithRetry(key, maxAttempts = 8, delayMs = 150) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const image = grabLiveFrame(key);
    if (image) return image;
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  return null;
}

function grabLiveFrame(key) {
  const container = document.querySelector(`[data-face-capture="${key}"]`);
  if (!container) return null;

  const video = container.querySelector("video");
  const canvas = container.querySelector("canvas");
  if (!video || !video.videoWidth) return null;

  const size = Math.min(video.videoWidth, video.videoHeight);
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const sx = (video.videoWidth - size) / 2;
  const sy = (video.videoHeight - size) / 2;
  ctx.drawImage(video, sx, sy, size, size, 0, 0, size, size);
  return canvas.toDataURL("image/jpeg", 0.9);
}

// Registration Scan buttons: grab + store the frame, no network call yet.
document.querySelectorAll(".btn-scan[data-scan]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const key = btn.getAttribute("data-scan");
    const container = document.querySelector(`[data-face-capture="${key}"]`);
    const statusEl = container.querySelector(".face-capture__status");
    const errorEl = document.querySelector(`[data-error="${key}_face"]`);

    statusEl.textContent = "Getting a clear frame\u2026";
    const image = await grabLiveFrameWithRetry(key);
    if (!image) {
      statusEl.textContent = "Camera isn't ready yet \u2014 please allow camera access.";
      return;
    }

    capturedFaces[key] = image;
    container.classList.add("is-scanned");
    statusEl.textContent = "Face scanned. Tap Scan again to redo it.";
    if (errorEl) errorEl.textContent = "";
  });
});

/* ================= Register step wizard ================= */
function goToRegisterStep(step) {
  document.querySelectorAll(".register-step").forEach((s) => s.classList.remove("is-active"));
  document.getElementById("register-step-" + step).classList.add("is-active");

  const indicator = document.getElementById("step-indicator");
  if (step === "patient") {
    indicator.textContent = "Step 1 of 2 \u2014 Patient details";
    stopCapture("caretaker");
    startCapture("patient");
  } else {
    indicator.textContent = "Step 2 of 2 \u2014 Caretaker details";
    stopCapture("patient");
    startCapture("caretaker");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("to-caretaker-step").addEventListener("click", () => {
  const errors = {};
  if (!document.getElementById("p-name").value.trim()) errors["patient.name"] = "Enter the patient's name.";
  if (!document.getElementById("p-age").value.trim()) errors["patient.age"] = "Enter the patient's age.";
  if (!radioValue("p-gender")) errors["patient.gender"] = "Select a gender.";
  if (!document.getElementById("p-address").value.trim()) errors["patient.address"] = "Enter the home address.";
  if (!document.getElementById("p-onset").value) errors["patient.onset_date"] = "Select the date the disease started.";
  if (!radioValue("p-memtype")) errors["patient.memory_loss_type"] = "Select the type of memory loss.";
  if (!capturedFaces.patient) errors["patient_face"] = "Scan the patient's face before continuing.";

  clearFormErrors();
  if (Object.keys(errors).length) {
    showFormErrors(errors);
    document.getElementById("patient-step-error").textContent = "Please fix the highlighted fields and try again.";
    return;
  }
  document.getElementById("patient-step-error").textContent = "";
  goToRegisterStep("caretaker");
});

document.getElementById("back-to-patient-step").addEventListener("click", () => {
  goToRegisterStep("patient");
});

/* ================= Register form logic ================= */
const relationOther = document.getElementById("c-relation-other");

const unusualTextarea = document.getElementById("p-unusual");
const unusualNoneCheckbox = document.getElementById("p-unusual-none");
unusualNoneCheckbox.addEventListener("change", () => {
  unusualTextarea.disabled = unusualNoneCheckbox.checked;
  if (unusualNoneCheckbox.checked) unusualTextarea.value = "";
});
document.querySelectorAll('input[name="c-relation"]').forEach((el) => {
  el.addEventListener("change", () => {
    relationOther.style.display = el.value === "other" && el.checked ? "block" : "none";
  });
});

const addressField = document.getElementById("c-address");
document.querySelectorAll('input[name="c-address-same"]').forEach((el) => {
  el.addEventListener("change", () => {
    addressField.style.display = el.value === "different" && el.checked ? "block" : "none";
  });
});

const facilityField = document.getElementById("facility-field");
document.querySelectorAll('input[name="c-observation"]').forEach((el) => {
  el.addEventListener("change", () => {
    facilityField.style.display = el.value === "yes" && el.checked ? "block" : "none";
  });
});

function radioValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : "";
}

function checkedValues(groupKey) {
  return Array.from(document.querySelectorAll(`[data-checkbox-group="${groupKey}"] input[type="checkbox"]:checked`))
    .map((el) => el.value);
}

function clearFormErrors() {
  document.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));
  document.getElementById("register-error").textContent = "";
}

function showFormErrors(errors) {
  Object.entries(errors).forEach(([key, message]) => {
    const el = document.querySelector(`[data-error="${key}"]`);
    if (el) el.textContent = message;
  });
}

document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  clearFormErrors();

  const addressSame = radioValue("c-address-same") !== "different";

  const payload = {
    patient: {
      name: document.getElementById("p-name").value.trim(),
      age: document.getElementById("p-age").value,
      gender: radioValue("p-gender"),
      address: document.getElementById("p-address").value.trim(),
      onset_date: document.getElementById("p-onset").value,
      memory_loss_type: radioValue("p-memtype"),
      extra_conditions: checkedValues("patient-conditions"),
      extra_conditions_other: document.getElementById("p-extra-other").value.trim(),
      unusual_activities: document.getElementById("p-unusual-none").checked
        ? "None"
        : document.getElementById("p-unusual").value.trim(),
    },
    caretaker: {
      full_name: document.getElementById("c-name").value.trim(),
      phone: document.getElementById("c-phone").value.trim(),
      emergency_phone: document.getElementById("c-emergency").value.trim(),
      age: document.getElementById("c-age").value,
      gender: radioValue("c-gender"),
      relation: radioValue("c-relation"),
      relation_other: document.getElementById("c-relation-other").value.trim(),
      email: document.getElementById("c-email").value.trim(),
      address_same_as_patient: addressSame,
      address: addressSame ? "" : document.getElementById("c-address").value.trim(),
      availability_hours: document.getElementById("c-hours").value,
      under_observation: radioValue("c-observation"),
      facility_location: document.getElementById("c-facility").value.trim(),
    },
    patient_face: capturedFaces.patient || null,
    caretaker_face: capturedFaces.caretaker || null,
  };

  if (!payload.patient_face) {
    showFormErrors({ patient_face: "Scan the patient's face before continuing." });
  }
  if (!payload.caretaker_face) {
    showFormErrors({ caretaker_face: "Scan the caretaker's face before submitting." });
  }
  if (!payload.patient_face || !payload.caretaker_face) {
    document.getElementById("register-error").textContent = "Please fix the highlighted fields and try again.";
    return;
  }

  const submitBtn = document.getElementById("register-submit");
  submitBtn.disabled = true;
  submitBtn.textContent = "Creating account...";

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (data.ok) {
      isLoggedIn = true;
      document.getElementById("dashboard-greeting").textContent = t("dashboard.welcome") + " " + payload.patient.name;
      showView("dashboard");
    } else {
      showFormErrors(data.errors || {});
      document.getElementById("register-error").textContent = "Please fix the highlighted fields and try again.";
    }
  } catch (err) {
    document.getElementById("register-error").textContent = "Something went wrong. Check your connection and try again.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="ti ti-check" aria-hidden="true"></i> Create account';
  }
});

/* ================= Login logic ================= */
/* Patient login is the default; a role toggle switches to caretaker login.
   Nothing is sent to the server until the person taps "Scan and log in" --
   the camera runs live for framing only up to that point. */
let currentLoginRole = "patient";
let loginAttemptInFlight = false;

function setLoginRole(role) {
  currentLoginRole = role;

  document.querySelectorAll(".role-tab[data-login-role]").forEach((tab) => {
    tab.classList.toggle("is-active", tab.getAttribute("data-login-role") === role);
  });

  const heading = document.getElementById("login-heading");
  const subtext = document.getElementById("login-subtext");
  if (role === "patient") {
    heading.textContent = "Welcome back";
    subtext.textContent = "Scan your face to enter the patient dashboard.";
  } else {
    heading.textContent = "Caretaker login";
    subtext.textContent = "Scan your face to check in on your patient.";
  }

  document.getElementById("login-error").textContent = "";
  stopCapture("login");
  startCapture("login");
}

document.querySelectorAll(".role-tab[data-login-role]").forEach((tab) => {
  tab.addEventListener("click", () => setLoginRole(tab.getAttribute("data-login-role")));
});

document.getElementById("login-scan-btn").addEventListener("click", async () => {
  if (loginAttemptInFlight) return;

  const container = document.querySelector('[data-face-capture="login"]');
  const statusEl = container.querySelector(".face-capture__status");
  const errorEl = document.getElementById("login-error");
  const scanBtn = document.getElementById("login-scan-btn");

  statusEl.textContent = "Getting a clear frame\u2026";
  const image = await grabLiveFrameWithRetry("login");
  if (!image) {
    statusEl.textContent = "Camera isn't ready yet \u2014 please allow camera access.";
    return;
  }

  loginAttemptInFlight = true;
  scanBtn.disabled = true;
  container.classList.add("is-busy");
  statusEl.textContent = "Scanning\u2026";
  errorEl.textContent = "";

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ face: image, role: currentLoginRole }),
    });
    const data = await res.json();

    container.classList.remove("is-busy");

    if (data.ok) {
      isLoggedIn = true;
      stopCapture("login");
      container.classList.add("is-matched");
      statusEl.textContent = "Face recognized. Welcome back.";
      const greeting = currentLoginRole === "patient"
        ? t("dashboard.welcome") + " " + (data.patient_name || t("dashboard.back"))
        : t("dashboard.welcomeCaretakerOf") + " " + (data.patient_name || t("dashboard.yourPatient"));
      document.getElementById("dashboard-greeting").textContent = greeting;
      setTimeout(() => showView("dashboard"), 600);
    } else {
      statusEl.textContent = "Not recognized \u2014 tap Scan to try again.";
      errorEl.textContent = data.error || "Could not log in. Please try again.";
      scanBtn.disabled = false;
    }
  } catch (err) {
    container.classList.remove("is-busy");
    statusEl.textContent = "Something went wrong.";
    errorEl.textContent = "Check your connection and try again.";
    scanBtn.disabled = false;
  } finally {
    loginAttemptInFlight = false;
  }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  isLoggedIn = false;
  stopTaskScheduler();
  Object.keys(activeAlarms).forEach((id) => stopAlarm(Number(id)));
  Object.keys(firedReminders).forEach((id) => delete firedReminders[id]);
  Object.keys(activeEventAlarms).forEach((id) => stopEventAlarm(Number(id)));
  eventFired.clear();
  hideTaskToast();
  tasksCache = [];
  eventsCache = [];
  assistantHistory = [];
  assistantHasGreeted = false;
  document.getElementById("assistant-messages").innerHTML = "";
  fetch("/logout").catch(() => { });
  showView("landing");
});

/* ================= Dashboard: chart tabs ================= */
document.querySelectorAll(".chart-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-chart-tab");
    document.querySelectorAll(".chart-tab").forEach((t) => t.classList.remove("is-active"));
    document.querySelectorAll(".chart-panel").forEach((p) => p.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`[data-chart-panel="${target}"]`).classList.add("is-active");
  });
});

/* ================= Dashboard: real progress charts (from quiz history) ================= */
/* "Short-term" = weekly growth (points per day, last 7 days), "Long-term" =
   monthly growth (points per ISO week, last 8 weeks), "Brain accuracy" =
   how fast questions are answered (avg response time per day, last 7 days,
   faster = better). Colored red/yellow/green per the trend the backend
   already classified (see _classify_trend in app.py). */

const TREND_COLORS = { green: "var(--green)", yellow: "var(--amber)", red: "var(--coral)" };
function trendLabel(trend) { return t(`trend.${trend}`); }

/**
 * Converts a series of numbers (nulls allowed, for days with no data) into
 * SVG polyline/polygon point strings on a 300x100 viewBox, plus the final
 * point's coordinates for the trailing dot.
 */
function buildChartGeometry(values) {
  const width = 300, height = 100, padTop = 12, padBottom = 12;
  const known = values.filter((v) => v !== null && v !== undefined);
  if (known.length === 0) {
    return { line: "0,100 300,100", fill: "0,100 300,100 300,100 0,100", dotX: 300, dotY: 100 };
  }
  const max = Math.max(...known);
  const min = Math.min(...known, 0);
  const range = (max - min) || 1;
  const n = values.length;
  const stepX = n > 1 ? width / (n - 1) : width;

  let lastY = height - padBottom;
  const pts = values.map((v, i) => {
    const x = i * stepX;
    let y;
    if (v === null || v === undefined) {
      y = lastY; // hold the previous known value across gaps in the data
    } else {
      y = padTop + (1 - (v - min) / range) * (height - padTop - padBottom);
      lastY = y;
    }
    return [x, y];
  });

  const lineStr = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const [lastX, lastYFinal] = pts[pts.length - 1];
  const fillStr = `${lineStr} ${lastX.toFixed(1)},${height} 0,${height}`;
  return { line: lineStr, fill: fillStr, dotX: lastX, dotY: lastYFinal };
}

function renderGrowthChart(prefix, series, colorTrend) {
  const geo = buildChartGeometry(series.values);
  const color = TREND_COLORS[colorTrend] || "var(--violet)";

  document.getElementById(`chart-${prefix}-line`).setAttribute("points", geo.line);
  document.getElementById(`chart-${prefix}-line`).style.stroke = color;
  document.getElementById(`chart-${prefix}-fill`).setAttribute("points", geo.fill);
  document.getElementById(`chart-${prefix}-grad-top`).setAttribute("stop-color", color);
  document.getElementById(`chart-${prefix}-grad-bottom`).setAttribute("stop-color", color);
  const dot = document.getElementById(`chart-${prefix}-dot`);
  dot.setAttribute("cx", geo.dotX);
  dot.setAttribute("cy", geo.dotY);
  dot.style.fill = color;
}

async function loadGrowthCharts() {
  try {
    const res = await fetch("/api/quiz/growth");
    const data = await res.json();
    if (!data.ok) return;

    // Short-term (combined quiz+games points per day, last 7 days)
    renderGrowthChart("short", data.short_term, data.short_term.trend);
    const shortTotal = data.short_term.values.reduce((a, b) => a + (b || 0), 0);
    document.getElementById("chart-short-big").textContent = trendLabel(data.short_term.trend);
    document.getElementById("chart-short-small").textContent =
      shortTotal > 0 ? `${shortTotal} ${t("chart.pointsThisWeek")}` : t("chart.noActivityWeek");

    // Long-term (combined quiz+games points per ISO week, last 8 weeks)
    renderGrowthChart("long", data.long_term, data.long_term.trend);
    const longTotal = data.long_term.values.reduce((a, b) => a + (b || 0), 0);
    document.getElementById("chart-long-big").textContent = trendLabel(data.long_term.trend);
    document.getElementById("chart-long-small").textContent =
      longTotal > 0 ? `${longTotal} ${t("chart.pointsLast8Weeks")}` : t("chart.noActivityMonth");

    // Brain accuracy: a 0-100 composite of accuracy + answer speed, combining quiz + games
    renderGrowthChart("brain", data.brain_accuracy, data.brain_accuracy.trend);
    const knownScores = data.brain_accuracy.values.filter((v) => v !== null);
    const avgScore = knownScores.length ? Math.round(knownScores.reduce((a, b) => a + b, 0) / knownScores.length) : null;
    document.getElementById("chart-brain-big").textContent = avgScore !== null ? `${avgScore}/100` : "\u2014";
    document.getElementById("chart-brain-small").textContent = avgScore !== null
      ? `${t("chart.accuracySpeed")} \u2014 ${trendLabel(data.brain_accuracy.trend)}`
      : t("chart.noActivityWeekQG");

    // By game: accuracy per game type, last 7 days -- which games the
    // patient is doing best/worst at.
    renderGameBarChart(data.by_game_type || []);
  } catch (err) {
    // leave the charts in their placeholder state
  }
}

function renderGameBarChart(byGameType) {
  const container = document.getElementById("game-bar-chart");
  const emptyMsg = document.getElementById("game-bar-chart-empty");
  if (!container) return;

  container.querySelectorAll(".bar-chart__row").forEach((el) => el.remove());

  if (!byGameType.length) {
    if (emptyMsg) emptyMsg.style.display = "block";
    return;
  }
  if (emptyMsg) emptyMsg.style.display = "none";

  const sorted = [...byGameType].sort((a, b) => b.accuracy - a.accuracy);
  sorted.forEach((entry) => {
    const meta = WEEKLY_GAME_META[entry.game_type] || { icon: "\ud83c\udfae", label: entry.game_type };
    const row = document.createElement("div");
    row.className = "bar-chart__row";
    row.innerHTML = `
      <span class="bar-chart__label">${meta.icon} ${meta.label}</span>
      <span class="bar-chart__track"><span class="bar-chart__fill" style="width:${entry.accuracy}%"></span></span>
      <span class="bar-chart__value">${entry.accuracy}%</span>
    `;
    container.appendChild(row);
  });
}

/* ================= Dashboard: daily timetable ================= */
/* Recurring daily tasks with timed sound + on-screen reminders. See the
   backend note in app.py's /api/tasks/<id>/alert-caretaker for an important
   caveat: the "notify the caretaker's phone" step doesn't send a real
   SMS/call (no provider configured), and reminders/alarms here only run
   while this browser tab has the app open -- there's no server-side
   scheduler backing this. */

const TASK_CHECK_INTERVAL_MS = 15000;   // how often we check task windows
const FINAL_BEEP_INTERVAL_MS = 20000;   // how often the urgent alarm re-beeps
const FINAL_WINDOW_MINUTES = 10;        // "last notification... before 10 min of end time"

let tasksCache = [];
let taskSchedulerInterval = null;
const firedReminders = {};  // { [taskId]: Set of 'start' | 'mid' | 'final' | 'alerted' }
const activeAlarms = {};    // { [taskId]: intervalId } -- urgent repeating alarm, cleared on confirm

function getFiredSet(taskId) {
  if (!firedReminders[taskId]) firedReminders[taskId] = new Set();
  return firedReminders[taskId];
}

function stopAlarm(taskId) {
  if (activeAlarms[taskId]) {
    clearInterval(activeAlarms[taskId]);
    delete activeAlarms[taskId];
  }
}

/* -- Sound: a couple of short beeps via Web Audio, no audio file needed.
   Browsers block audio until the page has had at least one user gesture,
   so we lazily create/resume the AudioContext on the first click anywhere. -- */
let taskAudioCtx = null;
function ensureTaskAudioContext() {
  if (!taskAudioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) taskAudioCtx = new AC();
  }
  if (taskAudioCtx && taskAudioCtx.state === "suspended") taskAudioCtx.resume();
  return taskAudioCtx;
}
document.addEventListener("click", ensureTaskAudioContext);

function playTaskBeep(urgent) {
  const ctx = ensureTaskAudioContext();
  if (!ctx) return;
  const beepOnce = (delayMs) => {
    setTimeout(() => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = urgent ? 880 : 660;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.28, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.55);
    }, delayMs);
  };
  beepOnce(0);
  if (urgent) beepOnce(320); // double-beep for the urgent/final reminder
}

/* -- Time helpers ("HH:MM" 24h strings, since that's what <input type=time> and the API use) -- */
function parseHM(str) {
  const [h, m] = (str || "0:0").split(":").map(Number);
  return h * 60 + m;
}
function nowMinutes() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}
function formatTimeLabel(hm) {
  const [h, m] = (hm || "0:0").split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

/* -- Reminder toast (shared between task reminders and event alarms) -- */
function showTaskToast(taskName, message, urgent) {
  const toast = document.getElementById("task-reminder-toast");
  toast.classList.toggle("is-urgent", !!urgent);
  document.getElementById("task-reminder-toast-title").textContent = taskName;
  document.getElementById("task-reminder-toast-msg").textContent = message;
  toast.dataset.taskId = "";
  toast.dataset.eventId = "";
  toast.classList.add("is-visible");
}
function showTaskToastFor(taskId, taskName, message, urgent) {
  showTaskToast(taskName, message, urgent);
  document.getElementById("task-reminder-toast").dataset.taskId = String(taskId);
}
function hideTaskToast() {
  document.getElementById("task-reminder-toast").classList.remove("is-visible");
}
document.getElementById("task-reminder-dismiss").addEventListener("click", hideTaskToast);
document.getElementById("task-reminder-confirm").addEventListener("click", () => {
  const toast = document.getElementById("task-reminder-toast");
  const taskId = toast.dataset.taskId;
  const eventId = toast.dataset.eventId;
  if (eventId) {
    acknowledgeEvent(Number(eventId));
  } else if (taskId) {
    confirmTask(Number(taskId));
  }
});

/* -- The scheduler: checks every task's time window on a timer -- */
function checkTaskReminders() {
  const nowMin = nowMinutes();
  tasksCache.forEach((task) => {
    if (task.status === "completed") {
      stopAlarm(task.id);
      return;
    }
    const startMin = parseHM(task.start_time);
    const endMin = parseHM(task.end_time);
    const finalMin = endMin - FINAL_WINDOW_MINUTES;
    const midMin = Math.floor((startMin + endMin) / 2);
    const fired = getFiredSet(task.id);

    if (nowMin >= startMin && nowMin < endMin && !fired.has("start")) {
      fired.add("start");
      playTaskBeep(false);
      showTaskToastFor(task.id, task.name,
        `It's time for: ${task.name} (${formatTimeLabel(task.start_time)}\u2013${formatTimeLabel(task.end_time)}).`, false);
    }

    if (nowMin >= midMin && nowMin < endMin && !fired.has("mid")) {
      fired.add("mid");
      playTaskBeep(false);
      showTaskToastFor(task.id, task.name,
        `Reminder: please complete "${task.name}" before ${formatTimeLabel(task.end_time)}.`, false);
    }

    if (nowMin >= finalMin && nowMin < endMin && !fired.has("final")) {
      fired.add("final");
      playTaskBeep(true);
      showTaskToastFor(task.id, task.name,
        `Only ${FINAL_WINDOW_MINUTES} minutes left for "${task.name}". Please confirm once done.`, true);
      activeAlarms[task.id] = setInterval(() => {
        playTaskBeep(true);
        showTaskToastFor(task.id, task.name, `Please confirm: have you finished "${task.name}"?`, true);
      }, FINAL_BEEP_INTERVAL_MS);
    }

    if (nowMin >= endMin && !fired.has("alerted")) {
      fired.add("alerted");
      stopAlarm(task.id);
      hideTaskToast();
      notifyCaretakerForTask(task.id);
    }
  });
}

async function notifyCaretakerForTask(taskId) {
  try {
    await fetch(`/api/tasks/${taskId}/alert-caretaker`, { method: "POST" });
  } catch (err) {
    // best-effort -- the task will just show as missed locally either way
  }
  loadTasks();
}

async function confirmTask(taskId) {
  stopAlarm(taskId);
  hideTaskToast();
  try {
    await fetch(`/api/tasks/${taskId}/confirm`, { method: "POST" });
  } catch (err) {
    // ignore -- loadTasks() below will just show the pre-confirm state again
  }
  loadTasks();
}

function startTaskScheduler() {
  if (taskSchedulerInterval) return;
  checkTaskReminders();
  checkEventReminders();
  taskSchedulerInterval = setInterval(() => {
    checkTaskReminders();
    checkEventReminders();
  }, TASK_CHECK_INTERVAL_MS);
}
function stopTaskScheduler() {
  if (taskSchedulerInterval) {
    clearInterval(taskSchedulerInterval);
    taskSchedulerInterval = null;
  }
}

/* -- Task list: fetch, render, tabs -- */
async function loadTasks() {
  try {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    if (data.ok) {
      tasksCache = data.tasks;
      renderTaskList();
      checkTaskReminders();
    }
  } catch (err) {
    document.getElementById("task-list-status").textContent = "Could not load the timetable.";
  }
}

function renderTaskList() {
  const list = document.getElementById("task-list");
  const statusEl = document.getElementById("task-list-status");
  list.innerHTML = "";

  statusEl.textContent = tasksCache.length ? "" : t("timetable.empty");

  tasksCache.forEach((task) => {
    const isDone = task.status === "completed";
    const li = document.createElement("li");
    li.className = "timetable-item";
    if (activeAlarms[task.id]) li.classList.add("is-alerting");

    const iconSpan = document.createElement("span");
    iconSpan.className = `timetable-item__icon ${isDone ? "status-completed" : "status-missed"}`;
    const icon = document.createElement("i");
    icon.className = isDone ? "ti ti-check" : "ti ti-x";
    icon.setAttribute("aria-hidden", "true");
    iconSpan.appendChild(icon);

    const timeSpan = document.createElement("span");
    timeSpan.className = "timetable-item__time";
    timeSpan.textContent = formatTimeLabel(task.start_time);

    const bodySpan = document.createElement("span");
    bodySpan.className = "timetable-item__body";
    const nameP = document.createElement("p");
    nameP.textContent = task.name;
    const rangeSpan = document.createElement("span");
    rangeSpan.textContent = `${formatTimeLabel(task.start_time)} \u2013 ${formatTimeLabel(task.end_time)}`;
    bodySpan.appendChild(nameP);
    bodySpan.appendChild(rangeSpan);

    const actions = document.createElement("span");
    actions.className = "timetable-item__actions";

    if (!isDone) {
      const confirmBtn = document.createElement("button");
      confirmBtn.type = "button";
      confirmBtn.className = "btn btn--primary btn--tiny";
      confirmBtn.textContent = "Confirm";
      confirmBtn.addEventListener("click", () => confirmTask(task.id));
      actions.appendChild(confirmBtn);
    }

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "timetable-item__icon-btn";
    editBtn.innerHTML = '<i class="ti ti-pencil" aria-hidden="true"></i>';
    editBtn.setAttribute("aria-label", "Edit task");
    editBtn.addEventListener("click", () => openTaskForm(task));
    actions.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "timetable-item__icon-btn";
    deleteBtn.innerHTML = '<i class="ti ti-trash" aria-hidden="true"></i>';
    deleteBtn.setAttribute("aria-label", "Delete task");
    deleteBtn.addEventListener("click", () => deleteTaskPrompt(task.id));
    actions.appendChild(deleteBtn);

    li.appendChild(iconSpan);
    li.appendChild(timeSpan);
    li.appendChild(bodySpan);
    li.appendChild(actions);
    list.appendChild(li);
  });

  updateDashboardStats();
}

/* -- Add / edit task form -- */
function openTaskForm(task) {
  document.getElementById("task-form-error").textContent = "";
  document.querySelectorAll('#task-form [data-error]').forEach((el) => (el.textContent = ""));
  document.getElementById("task-form").style.display = "block";
  document.getElementById("add-task-btn").style.display = "none";

  document.getElementById("task-form-id").value = task ? task.id : "";
  document.getElementById("task-name").value = task ? task.name : "";
  document.getElementById("task-start").value = task ? task.start_time : "";
  document.getElementById("task-end").value = task ? task.end_time : "";
}

function closeTaskForm() {
  const form = document.getElementById("task-form");
  form.style.display = "none";
  document.getElementById("add-task-btn").style.display = "inline-flex";
  form.reset();
}

document.getElementById("add-task-btn").addEventListener("click", () => openTaskForm(null));
document.getElementById("task-form-cancel").addEventListener("click", closeTaskForm);

document.getElementById("task-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.getElementById("task-form-error").textContent = "";
  document.querySelectorAll('#task-form [data-error]').forEach((el) => (el.textContent = ""));

  const id = document.getElementById("task-form-id").value;
  const payload = {
    name: document.getElementById("task-name").value.trim(),
    start_time: document.getElementById("task-start").value,
    end_time: document.getElementById("task-end").value,
  };

  const saveBtn = document.getElementById("task-form-save");
  saveBtn.disabled = true;

  try {
    const res = await fetch(id ? `/api/tasks/${id}` : "/api/tasks", {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.ok) {
      closeTaskForm();
      if (id) { delete firedReminders[id]; stopAlarm(Number(id)); } // edited times -- let reminders re-evaluate fresh
      loadTasks();
    } else {
      Object.entries(data.errors || {}).forEach(([key, message]) => {
        const el = document.querySelector(`#task-form [data-error="${key}"]`);
        if (el) el.textContent = message;
      });
      document.getElementById("task-form-error").textContent = "Please fix the highlighted fields.";
    }
  } catch (err) {
    document.getElementById("task-form-error").textContent = "Something went wrong. Check your connection.";
  } finally {
    saveBtn.disabled = false;
  }
});

async function deleteTaskPrompt(taskId) {
  if (!window.confirm("Remove this task from the daily timetable?")) return;
  stopAlarm(taskId);
  delete firedReminders[taskId];
  try {
    await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
  } catch (err) {
    // ignore -- loadTasks() below reflects whatever the server actually has
  }
  loadTasks();
}

/* ================= Dashboard: important events ================= */
/* One-off dated reminders. At the scheduled date/time, a sound + on-screen
   notification repeats roughly every 2 minutes (so twice within about 4
   minutes, per spec) until the person taps OK -- at which point the event
   is deleted outright rather than just marked done. */

const EVENT_ALARM_INTERVAL_MS = 2 * 60 * 1000; // ~2 min between beeps -> twice within ~4 min

let eventsCache = [];
const eventFired = new Set();       // event ids whose alarm has already started
const activeEventAlarms = {};       // { [eventId]: intervalId }

function stopEventAlarm(eventId) {
  if (activeEventAlarms[eventId]) {
    clearInterval(activeEventAlarms[eventId]);
    delete activeEventAlarms[eventId];
  }
}

function formatEventDateTime(dateStr, timeStr) {
  const d = new Date(`${dateStr}T${timeStr}`);
  const dateLabel = d.toLocaleDateString(currentLocaleTag(), { day: "numeric", month: "short" });
  return `${dateLabel}, ${formatTimeLabel(timeStr)}`;
}

/* -- Top stat cards: real numbers from tasksCache / eventsCache -- */
function updateDashboardStats() {
  // a) Tasks completed today
  const total = tasksCache.length;
  const done = tasksCache.filter((t) => t.status === "completed").length;
  document.getElementById("stat-tasks-value").textContent = total ? `${done} / ${total}` : "\u2014";
  document.getElementById("stat-tasks-trend").textContent = total
    ? (done === total ? t("stat.allDone") : `${total - done} ${t("stat.left")}`)
    : t("stat.noTasksYet");

  // c) Nearest upcoming (or overdue-unacknowledged) event
  const eventValueEl = document.getElementById("stat-event-value");
  const eventTrendEl = document.getElementById("stat-event-trend");
  if (eventsCache.length === 0) {
    eventValueEl.textContent = t("stat.noneScheduled");
    eventTrendEl.textContent = "\u00a0";
  } else {
    const sorted = [...eventsCache].sort((a, b) =>
      new Date(`${a.event_date}T${a.event_time}`) - new Date(`${b.event_date}T${b.event_time}`)
    );
    const next = sorted[0];
    eventValueEl.textContent = next.title;
    eventTrendEl.textContent = formatEventDateTime(next.event_date, next.event_time);
  }

  // d) Next task still ahead today (not yet completed, hasn't ended yet)
  const nowMin = nowMinutes();
  const upcoming = tasksCache
    .filter((t) => t.status !== "completed" && parseHM(t.end_time) > nowMin)
    .sort((a, b) => parseHM(a.start_time) - parseHM(b.start_time));
  const nextTaskValueEl = document.getElementById("stat-next-task-value");
  const nextTaskTrendEl = document.getElementById("stat-next-task-trend");
  if (upcoming.length === 0) {
    nextTaskValueEl.textContent = total ? t("stat.nothingLeftToday") : t("stat.noTasksYet");
    nextTaskTrendEl.textContent = "\u00a0";
  } else {
    nextTaskValueEl.textContent = upcoming[0].name;
    nextTaskTrendEl.textContent = `${formatTimeLabel(upcoming[0].start_time)}\u2013${formatTimeLabel(upcoming[0].end_time)}`;
  }
}

function fireEventAlarm(event) {
  playTaskBeep(true);
  showTaskToastForEvent(event.id, event.title,
    `${event.title} \u2014 ${formatEventDateTime(event.event_date, event.event_time)}. Tap OK once you've seen this.`);
}

function showTaskToastForEvent(eventId, title, message) {
  showTaskToast(title, message, true);
  document.getElementById("task-reminder-toast").dataset.eventId = String(eventId);
}

async function acknowledgeEvent(eventId) {
  stopEventAlarm(eventId);
  eventFired.delete(eventId);
  hideTaskToast();
  try {
    await fetch(`/api/events/${eventId}/acknowledge`, { method: "POST" });
  } catch (err) {
    // ignore -- loadEvents() below reflects whatever the server actually has
  }
  loadEvents();
}

function checkEventReminders() {
  const now = new Date();
  eventsCache.forEach((ev) => {
    const due = new Date(`${ev.event_date}T${ev.event_time}`);
    if (now >= due && !eventFired.has(ev.id)) {
      eventFired.add(ev.id);
      fireEventAlarm(ev);
      activeEventAlarms[ev.id] = setInterval(() => fireEventAlarm(ev), EVENT_ALARM_INTERVAL_MS);
    }
  });
}

async function loadEvents() {
  try {
    const res = await fetch("/api/events");
    const data = await res.json();
    if (data.ok) {
      eventsCache = data.events;
      renderEventList();
      checkEventReminders();
      updateDashboardStats();
    }
  } catch (err) {
    document.getElementById("event-list-status").textContent = "Could not load events.";
  }
}

function renderEventList() {
  const list = document.getElementById("event-list");
  const statusEl = document.getElementById("event-list-status");
  list.innerHTML = "";

  statusEl.textContent = eventsCache.length ? "" : t("events.empty");

  eventsCache.forEach((ev) => {
    const li = document.createElement("li");
    li.className = "event-item";

    const d = new Date(`${ev.event_date}T${ev.event_time}`);
    const badge = document.createElement("span");
    badge.className = "event-date-badge";
    const numSpan = document.createElement("span");
    numSpan.className = "num";
    numSpan.textContent = String(d.getDate());
    const monSpan = document.createElement("span");
    monSpan.className = "mon";
    monSpan.textContent = d.toLocaleDateString(currentLocaleTag(), { month: "short" });
    badge.appendChild(numSpan);
    badge.appendChild(monSpan);

    const body = document.createElement("span");
    body.className = "event-item__body";
    const titleP = document.createElement("p");
    titleP.textContent = ev.title;
    const timeSpan = document.createElement("span");
    timeSpan.textContent = formatTimeLabel(ev.event_time);
    body.appendChild(titleP);
    body.appendChild(timeSpan);

    const actions = document.createElement("span");
    actions.className = "event-item__actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "timetable-item__icon-btn";
    editBtn.innerHTML = '<i class="ti ti-pencil" aria-hidden="true"></i>';
    editBtn.setAttribute("aria-label", "Edit event");
    editBtn.addEventListener("click", () => openEventForm(ev));
    actions.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "timetable-item__icon-btn";
    deleteBtn.innerHTML = '<i class="ti ti-trash" aria-hidden="true"></i>';
    deleteBtn.setAttribute("aria-label", "Delete event");
    deleteBtn.addEventListener("click", () => deleteEventPrompt(ev.id));
    actions.appendChild(deleteBtn);

    li.appendChild(badge);
    li.appendChild(body);
    li.appendChild(actions);
    list.appendChild(li);
  });
}

function openEventForm(ev) {
  document.getElementById("event-form-error").textContent = "";
  document.querySelectorAll('#event-form [data-error]').forEach((el) => (el.textContent = ""));
  document.getElementById("event-form").style.display = "block";
  document.getElementById("add-event-btn").style.display = "none";

  document.getElementById("event-form-id").value = ev ? ev.id : "";
  document.getElementById("event-title").value = ev ? ev.title : "";
  document.getElementById("event-date").value = ev ? ev.event_date : "";
  document.getElementById("event-time").value = ev ? ev.event_time : "";
}

function closeEventForm() {
  const form = document.getElementById("event-form");
  form.style.display = "none";
  document.getElementById("add-event-btn").style.display = "inline-flex";
  form.reset();
}

document.getElementById("add-event-btn").addEventListener("click", () => openEventForm(null));
document.getElementById("event-form-cancel").addEventListener("click", closeEventForm);

document.getElementById("event-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.getElementById("event-form-error").textContent = "";
  document.querySelectorAll('#event-form [data-error]').forEach((el) => (el.textContent = ""));

  const id = document.getElementById("event-form-id").value;
  const payload = {
    title: document.getElementById("event-title").value.trim(),
    event_date: document.getElementById("event-date").value,
    event_time: document.getElementById("event-time").value,
  };

  const saveBtn = document.getElementById("event-form-save");
  saveBtn.disabled = true;

  try {
    const res = await fetch(id ? `/api/events/${id}` : "/api/events", {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.ok) {
      closeEventForm();
      if (id) { stopEventAlarm(Number(id)); eventFired.delete(Number(id)); } // edited time -- re-evaluate fresh
      loadEvents();
    } else {
      Object.entries(data.errors || {}).forEach(([key, message]) => {
        const el = document.querySelector(`#event-form [data-error="${key}"]`);
        if (el) el.textContent = message;
      });
      document.getElementById("event-form-error").textContent = "Please fix the highlighted fields.";
    }
  } catch (err) {
    document.getElementById("event-form-error").textContent = "Something went wrong. Check your connection.";
  } finally {
    saveBtn.disabled = false;
  }
});

async function deleteEventPrompt(eventId) {
  if (!window.confirm("Remove this event?")) return;
  stopEventAlarm(eventId);
  eventFired.delete(eventId);
  try {
    await fetch(`/api/events/${eventId}`, { method: "DELETE" });
  } catch (err) {
    // ignore -- loadEvents() below reflects whatever the server actually has
  }
  loadEvents();
}

/* ================= Profile page ================= */

function hideChangeCaretakerForm() {
  const form = document.getElementById("change-caretaker-form");
  if (form) form.style.display = "none";
  const revealBtn = document.getElementById("reveal-change-caretaker");
  if (revealBtn) revealBtn.style.display = "inline-flex";
  stopCapture("new-caretaker");
  capturedFaces["new-caretaker"] = null;
  const container = document.querySelector('[data-face-capture="new-caretaker"]');
  if (container) container.classList.remove("is-scanned");
}

// -- Profile photo: change/upload (display-only, not used for face-scan login) --
function wireProfilePhotoUpload(role, btnId, inputId, statusId) {
  const btn = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  const statusEl = document.getElementById(statusId);

  btn.addEventListener("click", () => input.click());

  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;

    statusEl.textContent = "Uploading\u2026";

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const res = await fetch("/api/profile/photo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: role, image: reader.result }),
        });
        const data = await res.json();
        if (data.ok) {
          setAvatarImage(`pf-${role}-avatar-img`, data.profile_photo_url);
          if (role === "patient") setAvatarImage("patient-avatar-img", data.profile_photo_url);
          if (role === "caretaker") setAvatarImage("caretaker-avatar-img", data.profile_photo_url);
          statusEl.textContent = "Photo updated.";
        } else {
          statusEl.textContent = data.error || "Could not upload the photo.";
        }
      } catch (err) {
        statusEl.textContent = "Something went wrong. Check your connection.";
      } finally {
        input.value = "";
      }
    };
    reader.readAsDataURL(file);
  });
}
wireProfilePhotoUpload("patient", "pf-patient-photo-btn", "pf-patient-photo-input", "pf-patient-photo-status");
wireProfilePhotoUpload("caretaker", "pf-caretaker-photo-btn", "pf-caretaker-photo-input", "pf-caretaker-photo-status");

// -- Profile tab switching (Patient / Caretaker) --
document.querySelectorAll(".role-tab[data-profile-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-profile-tab");
    document.querySelectorAll(".role-tab[data-profile-tab]").forEach((t) => t.classList.remove("is-active"));
    document.querySelectorAll(".profile-tab").forEach((p) => p.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`[data-profile-panel="${target}"]`).classList.add("is-active");
  });
});

function getGenderLabels() { return { male: t("enum.male"), female: t("enum.female"), other: t("enum.other") }; }
function getMemTypeLabels() { return { short_term: t("enum.shortTerm"), long_term: t("enum.longTerm"), both: t("enum.both") }; }
function getRelationLabels() { return { family: t("enum.family"), friend: t("enum.friend"), relative: t("enum.relative"), other: t("enum.other") }; }
const GENDER_LABELS = new Proxy({}, { get: (_, prop) => getGenderLabels()[prop] });
const MEMTYPE_LABELS = new Proxy({}, { get: (_, prop) => getMemTypeLabels()[prop] });
const RELATION_LABELS = new Proxy({}, { get: (_, prop) => getRelationLabels()[prop] });

/**
 * Shows a photo in an avatar-circle (swaps the fallback icon out for the
 * <img>), or leaves the icon showing if there's no photo yet.
 */
function setAvatarImage(imgId, url) {
  const img = document.getElementById(imgId);
  if (!img) return;
  if (url) {
    img.src = url;
    img.hidden = false;
  } else {
    img.hidden = true;
    img.removeAttribute("src");
  }
}

async function loadProfile() {
  try {
    const res = await fetch("/api/profile");
    const data = await res.json();
    if (!data.ok) return;

    const patient = data.patient || {};
    const caretaker = data.caretaker || {};

    setAvatarImage("pf-patient-avatar-img", patient.profile_photo_url);
    setAvatarImage("pf-caretaker-avatar-img", caretaker.profile_photo_url);
    setAvatarImage("patient-avatar-img", patient.profile_photo_url);
    setAvatarImage("caretaker-avatar-img", caretaker.profile_photo_url);

    if (patient.name) {
      document.getElementById("dashboard-greeting").textContent = t("dashboard.welcome") + " " + patient.name;
    }

    // -- Patient read-only --
    document.getElementById("pf-p-name").textContent = patient.name || "\u2014";
    document.getElementById("pf-p-age").textContent = patient.age || "\u2014";
    document.getElementById("pf-p-gender").textContent = GENDER_LABELS[patient.gender] || "\u2014";
    document.getElementById("pf-p-onset").textContent = patient.onset_summary
      ? `${patient.onset_summary} (${patient.onset_date})`
      : (patient.onset_date || "\u2014");
    document.getElementById("pf-p-memtype").textContent = MEMTYPE_LABELS[patient.memory_loss_type] || "\u2014";

    // -- Patient editable --
    document.getElementById("pf-address").value = patient.address || "";
    document.getElementById("pf-neighbour-phone").value = patient.neighbour_phone || "";
    const conditionsList = patient.extra_conditions_list || [];
    document.querySelectorAll('[data-checkbox-group="pf-patient-conditions"] input[type="checkbox"]').forEach((cb) => {
      cb.checked = conditionsList.includes(cb.value);
    });
    document.getElementById("pf-extra-other").value = patient.extra_conditions_other || "";
    const unusual = patient.unusual_activities || "";
    document.getElementById("pf-unusual-none").checked = unusual.trim().toLowerCase() === "none";
    document.getElementById("pf-unusual").value = unusual.trim().toLowerCase() === "none" ? "" : unusual;
    document.getElementById("pf-unusual").disabled = document.getElementById("pf-unusual-none").checked;

    // -- Caretaker read-only --
    document.getElementById("pf-c-name").textContent = caretaker.full_name || "\u2014";
    document.getElementById("pf-c-age").textContent = caretaker.age || "\u2014";
    document.getElementById("pf-c-gender").textContent = GENDER_LABELS[caretaker.gender] || "\u2014";
    document.getElementById("pf-c-relation").textContent = caretaker.relation === "other"
      ? (caretaker.relation_other || "Other")
      : (RELATION_LABELS[caretaker.relation] || "\u2014");

    // -- Caretaker editable --
    document.getElementById("pf-c-phone").value = caretaker.phone || "";
    document.getElementById("pf-c-emergency").value = caretaker.emergency_phone || "";
    document.getElementById("pf-c-email").value = caretaker.email || "";
    document.getElementById("pf-c-hours").value = caretaker.availability_hours || "";

    const addressSame = caretaker.address_same_as_patient !== false;
    document.querySelector(`input[name="pf-c-address-same"][value="${addressSame ? "same" : "different"}"]`).checked = true;
    document.getElementById("pf-c-address").style.display = addressSame ? "none" : "block";
    document.getElementById("pf-c-address").value = caretaker.address || "";

    const underObs = caretaker.under_observation ? "yes" : "no";
    const obsRadio = document.querySelector(`input[name="pf-c-observation"][value="${underObs}"]`);
    if (obsRadio) obsRadio.checked = true;
    document.getElementById("pf-facility-field").style.display = caretaker.under_observation ? "block" : "none";
    document.getElementById("pf-c-facility").value = caretaker.facility_location || "";
  } catch (err) {
    // Silently ignore -- the profile page will just show blank/placeholder values
  }
}

// -- Caretaker profile: address / observation conditional fields --
document.querySelectorAll('input[name="pf-c-address-same"]').forEach((el) => {
  el.addEventListener("change", () => {
    document.getElementById("pf-c-address").style.display = el.value === "different" && el.checked ? "block" : "none";
  });
});
document.querySelectorAll('input[name="pf-c-observation"]').forEach((el) => {
  el.addEventListener("change", () => {
    document.getElementById("pf-facility-field").style.display = el.value === "yes" && el.checked ? "block" : "none";
  });
});

// -- Patient profile: "nothing unusual" checkbox --
const pfUnusualTextarea = document.getElementById("pf-unusual");
const pfUnusualNoneCheckbox = document.getElementById("pf-unusual-none");
pfUnusualNoneCheckbox.addEventListener("change", () => {
  pfUnusualTextarea.disabled = pfUnusualNoneCheckbox.checked;
  if (pfUnusualNoneCheckbox.checked) pfUnusualTextarea.value = "";
});

// -- Patient profile: save --
document.getElementById("patient-profile-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelectorAll('[data-error^="pf-patient."]').forEach((el) => (el.textContent = ""));
  document.getElementById("patient-profile-error").textContent = "";
  document.getElementById("patient-profile-success").classList.remove("is-visible");

  const payload = {
    address: document.getElementById("pf-address").value.trim(),
    neighbour_phone: document.getElementById("pf-neighbour-phone").value.trim(),
    extra_conditions: Array.from(
      document.querySelectorAll('[data-checkbox-group="pf-patient-conditions"] input[type="checkbox"]:checked')
    ).map((cb) => cb.value),
    extra_conditions_other: document.getElementById("pf-extra-other").value.trim(),
    unusual_activities: pfUnusualNoneCheckbox.checked ? "None" : pfUnusualTextarea.value.trim(),
  };

  try {
    const res = await fetch("/api/profile/patient", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.ok) {
      document.getElementById("patient-profile-success").classList.add("is-visible");
    } else {
      Object.entries(data.errors || {}).forEach(([key, message]) => {
        const el = document.querySelector(`[data-error="${key}"]`);
        if (el) el.textContent = message;
      });
      document.getElementById("patient-profile-error").textContent = "Please fix the highlighted fields.";
    }
  } catch (err) {
    document.getElementById("patient-profile-error").textContent = "Something went wrong. Check your connection.";
  }
});

// -- Caretaker profile: save --
document.getElementById("caretaker-profile-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelectorAll('[data-error^="pf-caretaker."]').forEach((el) => (el.textContent = ""));
  document.getElementById("caretaker-profile-error").textContent = "";
  document.getElementById("caretaker-profile-success").classList.remove("is-visible");

  const addressSameEl = document.querySelector('input[name="pf-c-address-same"]:checked');
  const addressSame = !addressSameEl || addressSameEl.value !== "different";
  const observationEl = document.querySelector('input[name="pf-c-observation"]:checked');

  const payload = {
    phone: document.getElementById("pf-c-phone").value.trim(),
    emergency_phone: document.getElementById("pf-c-emergency").value.trim(),
    email: document.getElementById("pf-c-email").value.trim(),
    availability_hours: document.getElementById("pf-c-hours").value,
    address_same_as_patient: addressSame,
    address: addressSame ? "" : document.getElementById("pf-c-address").value.trim(),
    under_observation: observationEl ? observationEl.value : "",
    facility_location: document.getElementById("pf-c-facility").value.trim(),
  };

  try {
    const res = await fetch("/api/profile/caretaker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.ok) {
      document.getElementById("caretaker-profile-success").classList.add("is-visible");
    } else {
      Object.entries(data.errors || {}).forEach(([key, message]) => {
        const el = document.querySelector(`[data-error="${key}"]`);
        if (el) el.textContent = message;
      });
      document.getElementById("caretaker-profile-error").textContent = "Please fix the highlighted fields.";
    }
  } catch (err) {
    document.getElementById("caretaker-profile-error").textContent = "Something went wrong. Check your connection.";
  }
});

// -- Change caretaker: reveal / cancel --
document.getElementById("reveal-change-caretaker").addEventListener("click", () => {
  document.getElementById("change-caretaker-form").style.display = "block";
  document.getElementById("reveal-change-caretaker").style.display = "none";
  startCapture("new-caretaker");
});
document.getElementById("cancel-change-caretaker").addEventListener("click", () => {
  hideChangeCaretakerForm();
  document.getElementById("change-caretaker-form").reset();
  document.getElementById("nc-address").style.display = "none";
  document.getElementById("nc-facility-field").style.display = "none";
  document.getElementById("nc-relation-other").style.display = "none";
});

// -- Change caretaker: conditional fields (mirrors the registration form) --
document.querySelectorAll('input[name="nc-relation"]').forEach((el) => {
  el.addEventListener("change", () => {
    document.getElementById("nc-relation-other").style.display = el.value === "other" && el.checked ? "block" : "none";
  });
});
document.querySelectorAll('input[name="nc-address-same"]').forEach((el) => {
  el.addEventListener("change", () => {
    document.getElementById("nc-address").style.display = el.value === "different" && el.checked ? "block" : "none";
  });
});
document.querySelectorAll('input[name="nc-observation"]').forEach((el) => {
  el.addEventListener("change", () => {
    document.getElementById("nc-facility-field").style.display = el.value === "yes" && el.checked ? "block" : "none";
  });
});

// -- Change caretaker: submit --
document.getElementById("change-caretaker-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelectorAll('[data-error^="nc."], [data-error="nc_face"]').forEach((el) => (el.textContent = ""));
  document.getElementById("change-caretaker-error").textContent = "";

  const addressSameEl = document.querySelector('input[name="nc-address-same"]:checked');
  const addressSame = !addressSameEl || addressSameEl.value !== "different";
  const relationEl = document.querySelector('input[name="nc-relation"]:checked');
  const genderEl = document.querySelector('input[name="nc-gender"]:checked');
  const observationEl = document.querySelector('input[name="nc-observation"]:checked');

  const payload = {
    caretaker: {
      full_name: document.getElementById("nc-name").value.trim(),
      phone: document.getElementById("nc-phone").value.trim(),
      emergency_phone: document.getElementById("nc-emergency").value.trim(),
      age: document.getElementById("nc-age").value,
      gender: genderEl ? genderEl.value : "",
      relation: relationEl ? relationEl.value : "",
      relation_other: document.getElementById("nc-relation-other").value.trim(),
      email: document.getElementById("nc-email").value.trim(),
      address_same_as_patient: addressSame,
      address: addressSame ? "" : document.getElementById("nc-address").value.trim(),
      availability_hours: document.getElementById("nc-hours").value,
      under_observation: observationEl ? observationEl.value : "",
      facility_location: document.getElementById("nc-facility").value.trim(),
    },
    caretaker_face: capturedFaces["new-caretaker"] || null,
  };

  if (!payload.caretaker_face) {
    document.querySelector('[data-error="nc_face"]').textContent = "Scan the new caretaker's face before submitting.";
    document.getElementById("change-caretaker-error").textContent = "Please fix the highlighted fields.";
    return;
  }

  const submitBtn = document.querySelector('#change-caretaker-form button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = "Saving...";

  try {
    const res = await fetch("/api/profile/change-caretaker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.ok) {
      hideChangeCaretakerForm();
      loadProfile();
    } else {
      Object.entries(data.errors || {}).forEach(([key, message]) => {
        const el = document.querySelector(`[data-error="${key}"]`);
        if (el) el.textContent = message;
      });
      document.getElementById("change-caretaker-error").textContent = "Please fix the highlighted fields.";
    }
  } catch (err) {
    document.getElementById("change-caretaker-error").textContent = "Something went wrong. Check your connection.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="ti ti-check" aria-hidden="true"></i> Save new caretaker';
  }
});

/* ================= Recognize a Person (dashboard modal) ================= */
const MEMTYPE_DISPLAY = {
  love: "Love", family: "Family", friend: "Friend", enemy: "Enemy",
  student: "Student", teacher: "Teacher", colleague: "Colleague",
  neighbor: "Neighbor", other: "Other",
};

function resetRecognizeModal() {
  document.getElementById("recognize-result").classList.remove("is-visible");
  document.getElementById("recognize-not-found").classList.remove("is-visible");
  document.getElementById("recognize-register-form").classList.remove("is-visible");
  document.getElementById("recognize-register-form").reset();
  document.getElementById("recognize-error").textContent = "";
  document.getElementById("recognize-register-error").textContent = "";
  document.querySelectorAll('#recognize-register-form [data-error]').forEach((el) => (el.textContent = ""));
  document.getElementById("recognize-capture-area").style.display = "block";
  document.getElementById("recognize-browse").classList.remove("is-visible");
  document.getElementById("recognize-scan-area").style.display = "block";
  capturedFaces["recognize"] = null;
  const container = document.querySelector('[data-face-capture="recognize"]');
  if (container) container.classList.remove("is-scanned", "is-busy");
}

function scrollToRecognizePanel() {
  const panel = document.getElementById("recognize-panel");
  if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* -- Search people (browse mode) -- */
let knownPeopleCache = [];

function renderKnownPeopleList(people) {
  const list = document.getElementById("known-people-list");
  list.innerHTML = "";

  if (people.length === 0) {
    list.innerHTML = '<li class="known-people-empty">No one matches yet.</li>';
    return;
  }

  people.forEach((p) => {
    const li = document.createElement("li");
    li.className = "known-people-item";

    const avatarWrap = document.createElement("div");
    avatarWrap.className = "avatar-circle avatar-circle--sm";
    if (p.photo_url) {
      const img = document.createElement("img");
      img.src = p.photo_url;
      img.alt = p.name || "";
      avatarWrap.appendChild(img);
      avatarWrap.style.cursor = "pointer";
      avatarWrap.addEventListener("click", () => openImageLightbox(p.photo_url, p.name));
    } else {
      const icon = document.createElement("i");
      icon.className = "ti ti-user";
      icon.setAttribute("aria-hidden", "true");
      avatarWrap.appendChild(icon);
    }

    const body = document.createElement("div");
    body.className = "known-people-item__body";
    const nameP = document.createElement("p");
    nameP.textContent = p.name;
    const metaSpan = document.createElement("span");
    metaSpan.className = "meta";
    metaSpan.textContent = `${p.relation} \u00b7 known for ${p.known_since}`;
    body.appendChild(nameP);
    body.appendChild(metaSpan);
    if (p.memory_note) {
      const noteSpan = document.createElement("span");
      noteSpan.className = "note";
      noteSpan.textContent = p.memory_note;
      body.appendChild(noteSpan);
    }

    const badge = document.createElement("span");
    badge.className = "memory-type-badge";
    badge.textContent = MEMTYPE_DISPLAY[p.memory_type] || p.memory_type;
    badge.style.flexShrink = "0";

    li.appendChild(avatarWrap);
    li.appendChild(body);
    li.appendChild(badge);
    list.appendChild(li);
  });
}

function filterKnownPeople(query) {
  const q = query.trim().toLowerCase();
  if (!q) return knownPeopleCache;
  return knownPeopleCache.filter((p) => {
    const memLabel = (MEMTYPE_DISPLAY[p.memory_type] || p.memory_type || "").toLowerCase();
    return (
      (p.name || "").toLowerCase().includes(q) ||
      (p.relation || "").toLowerCase().includes(q) ||
      (p.memory_note || "").toLowerCase().includes(q) ||
      memLabel.includes(q)
    );
  });
}

async function openBrowseMode() {
  stopCapture("recognize");
  document.getElementById("recognize-scan-area").style.display = "none";
  document.getElementById("recognize-browse").classList.add("is-visible");

  const statusEl = document.getElementById("recognize-browse-status");
  const searchInput = document.getElementById("recognize-search-input");
  searchInput.value = "";
  statusEl.textContent = t("common.loading");
  renderKnownPeopleList([]);

  try {
    const res = await fetch("/api/known-people");
    const data = await res.json();
    if (data.ok) {
      knownPeopleCache = data.people || [];
      statusEl.textContent = knownPeopleCache.length
        ? `${knownPeopleCache.length} people registered.`
        : "No one registered yet \u2014 scan and add someone first.";
      renderKnownPeopleList(knownPeopleCache);
    } else {
      statusEl.textContent = data.error || "Could not load the list.";
    }
  } catch (err) {
    statusEl.textContent = "Something went wrong. Check your connection.";
  }

  searchInput.focus();
}

function closeBrowseMode() {
  document.getElementById("recognize-browse").classList.remove("is-visible");
  document.getElementById("recognize-scan-area").style.display = "block";
  startCapture("recognize");
}

document.getElementById("recognize-search-btn").addEventListener("click", openBrowseMode);
document.getElementById("recognize-browse-back").addEventListener("click", closeBrowseMode);
document.getElementById("recognize-search-input").addEventListener("input", (e) => {
  const filtered = filterKnownPeople(e.target.value);
  renderKnownPeopleList(filtered);
  const statusEl = document.getElementById("recognize-browse-status");
  statusEl.textContent = e.target.value.trim()
    ? `${filtered.length} match${filtered.length === 1 ? "" : "es"}.`
    : (knownPeopleCache.length ? `${knownPeopleCache.length} people registered.` : "No one registered yet \u2014 scan and add someone first.");
});

document.getElementById("recognize-scan-btn").addEventListener("click", async () => {
  const container = document.querySelector('[data-face-capture="recognize"]');
  const statusEl = container.querySelector(".face-capture__status");
  const scanBtn = document.getElementById("recognize-scan-btn");
  const errorEl = document.getElementById("recognize-error");

  statusEl.textContent = "Getting a clear frame\u2026";
  const image = await grabLiveFrameWithRetry("recognize");
  if (!image) {
    statusEl.textContent = "Camera isn't ready yet \u2014 please allow camera access.";
    return;
  }
  capturedFaces["recognize"] = image;

  scanBtn.disabled = true;
  container.classList.add("is-busy");
  statusEl.textContent = "Scanning\u2026";
  errorEl.textContent = "";

  try {
    const res = await fetch("/api/recognize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ face: image }),
    });
    const data = await res.json();
    container.classList.remove("is-busy");

    if (!data.ok) {
      errorEl.textContent = data.error || "Something went wrong. Please try again.";
      scanBtn.disabled = false;
      return;
    }

    document.getElementById("recognize-capture-area").style.display = "none";

    if (data.found) {
      const p = data.person;
      setAvatarImage("recognize-result-avatar-img", p.photo_url);
      document.getElementById("recognize-result-name").textContent = p.name;
      document.getElementById("recognize-result-relation").textContent = p.relation;
      document.getElementById("recognize-result-since").textContent = p.known_since;
      document.getElementById("recognize-result-memtype").textContent = MEMTYPE_DISPLAY[p.memory_type] || p.memory_type;
      const noteRow = document.getElementById("recognize-result-note-row");
      if (p.memory_note) {
        document.getElementById("recognize-result-note").textContent = p.memory_note;
        noteRow.style.display = "flex";
      } else {
        noteRow.style.display = "none";
      }
      document.getElementById("recognize-result").classList.add("is-visible");
    } else {
      document.getElementById("recognize-not-found").classList.add("is-visible");
    }
  } catch (err) {
    container.classList.remove("is-busy");
    errorEl.textContent = "Something went wrong. Check your connection and try again.";
    scanBtn.disabled = false;
  }
});

document.getElementById("recognize-scan-again").addEventListener("click", () => {
  resetRecognizeModal();
  startCapture("recognize");
});

document.getElementById("recognize-add-person-btn").addEventListener("click", () => {
  document.getElementById("recognize-not-found").classList.remove("is-visible");
  document.getElementById("recognize-register-form").classList.add("is-visible");
});

document.getElementById("recognize-cancel-register").addEventListener("click", () => {
  resetRecognizeModal();
  startCapture("recognize");
});

document.getElementById("recognize-register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelectorAll('#recognize-register-form [data-error]').forEach((el) => (el.textContent = ""));
  document.getElementById("recognize-register-error").textContent = "";

  const memtypeEl = document.querySelector('input[name="rp-memtype"]:checked');
  const payload = {
    name: document.getElementById("rp-name").value.trim(),
    relation: document.getElementById("rp-relation").value.trim(),
    known_since: document.getElementById("rp-since").value.trim(),
    memory_type: memtypeEl ? memtypeEl.value : "",
    memory_note: document.getElementById("rp-note").value.trim(),
    face: capturedFaces["recognize"],
  };

  const submitBtn = document.querySelector('#recognize-register-form button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = "Saving...";

  try {
    const res = await fetch("/api/recognize/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (data.ok) {
      const p = data.person;
      document.getElementById("recognize-register-form").classList.remove("is-visible");
      setAvatarImage("recognize-result-avatar-img", p.photo_url);
      document.getElementById("recognize-result-name").textContent = p.name;
      document.getElementById("recognize-result-relation").textContent = p.relation;
      document.getElementById("recognize-result-since").textContent = p.known_since;
      document.getElementById("recognize-result-memtype").textContent = MEMTYPE_DISPLAY[p.memory_type] || p.memory_type;
      const noteRow = document.getElementById("recognize-result-note-row");
      if (p.memory_note) {
        document.getElementById("recognize-result-note").textContent = p.memory_note;
        noteRow.style.display = "flex";
      } else {
        noteRow.style.display = "none";
      }
      document.getElementById("recognize-result").classList.add("is-visible");
    } else {
      Object.entries(data.errors || {}).forEach(([key, message]) => {
        const el = document.querySelector(`#recognize-register-form [data-error="${key}"]`);
        if (el) el.textContent = message;
      });
      document.getElementById("recognize-register-error").textContent = "Please fix the highlighted fields.";
    }
  } catch (err) {
    document.getElementById("recognize-register-error").textContent = "Something went wrong. Check your connection.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="ti ti-check" aria-hidden="true"></i> Save this person';
  }
});

/* ================= Dashboard: live GPS location ================= */
/* Uses the browser's real Geolocation API (navigator.geolocation) -- this
   is the device/browser's actual current position, not a simulated one.
   Rendered on a real interactive map via Leaflet + OpenStreetMap tiles,
   which needs no API key (unlike Google Maps). Requires the person to grant
   location permission when the browser prompts. */

let liveMapInstance = null;
let liveMapMarker = null;
let liveMapAccuracyCircle = null;

function renderLiveMap(lat, lng, accuracyMeters) {
  if (typeof L === "undefined") {
    document.getElementById("live-location-status").textContent = "Map library failed to load.";
    return;
  }
  if (!liveMapInstance) {
    liveMapInstance = L.map("live-map", { attributionControl: true }).setView([lat, lng], 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(liveMapInstance);
    liveMapMarker = L.marker([lat, lng]).addTo(liveMapInstance);
    if (accuracyMeters) {
      liveMapAccuracyCircle = L.circle([lat, lng], {
        radius: accuracyMeters, color: "#6C63A6", weight: 1, fillColor: "#6C63A6", fillOpacity: 0.12,
      }).addTo(liveMapInstance);
    }
  } else {
    liveMapInstance.setView([lat, lng], liveMapInstance.getZoom());
    liveMapMarker.setLatLng([lat, lng]);
    if (accuracyMeters) {
      if (liveMapAccuracyCircle) {
        liveMapAccuracyCircle.setLatLng([lat, lng]).setRadius(accuracyMeters);
      } else {
        liveMapAccuracyCircle = L.circle([lat, lng], {
          radius: accuracyMeters, color: "#6C63A6", weight: 1, fillColor: "#6C63A6", fillOpacity: 0.12,
        }).addTo(liveMapInstance);
      }
    }
    setTimeout(() => liveMapInstance.invalidateSize(), 50);
  }
}

let lastKnownCoords = null; // { lat, lng } from the most recent successful geolocation fetch

function fetchLiveLocation() {
  const statusEl = document.getElementById("live-location-status");
  const updatedEl = document.getElementById("live-location-updated");

  if (!navigator.geolocation) {
    statusEl.textContent = t("location.notSupported");
    updatedEl.textContent = t("location.notAvailable");
    return;
  }

  statusEl.textContent = t("location.getting");

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const accuracy = Math.round(pos.coords.accuracy || 0);
      lastKnownCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      renderLiveMap(pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy);
      statusEl.textContent = accuracy
        ? `${t("location.accurateTo")} \u00b1${accuracy}m \u2014 ${t("location.phonesNote")}`
        : "";
      updatedEl.textContent = `${t("location.lastUpdated")} ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    },
    (err) => {
      let msg = t("location.errorGeneric");
      if (err.code === err.PERMISSION_DENIED) msg = t("location.errorDenied");
      else if (err.code === err.POSITION_UNAVAILABLE) msg = t("location.errorUnavailable");
      else if (err.code === err.TIMEOUT) msg = t("location.errorTimeout");
      statusEl.textContent = msg;
      updatedEl.textContent = t("location.notAvailable");
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

document.getElementById("refresh-location-btn").addEventListener("click", fetchLiveLocation);

/* Nearby-place buttons: open a Google Maps search for the category, centered
   on the most recently fetched location when we have one. If location
   hasn't been fetched yet, falls back to a plain "near me" search -- Google
   Maps will then ask for its own location permission in the new tab. */
function openNearbySearch(query) {
  const url = lastKnownCoords
    ? `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${lastKnownCoords.lat},${lastKnownCoords.lng},15z`
    : `https://www.google.com/maps/search/${encodeURIComponent(query + " near me")}`;
  window.open(url, "_blank", "noopener");
}
document.getElementById("nearby-hospital-btn")?.addEventListener("click", () => openNearbySearch("hospital"));
document.getElementById("nearby-pharmacy-btn")?.addEventListener("click", () => openNearbySearch("pharmacy"));
document.getElementById("nearby-police-btn")?.addEventListener("click", () => openNearbySearch("police station"));

/* ================= Find My Things ================= */
/* Photograph an object + note where it was put, then browse/search that
   list later. NOT automatic image-matching recognition (see the schema
   note in supabase_schema.sql for why) -- finding something means looking
   through the list, which a real photo makes much easier than text alone. */

let objectCapturedPhoto = null;

function showObjectAddView() {
  document.getElementById("object-search-area").style.display = "none";
  document.getElementById("object-add-area").style.display = "block";
  resetObjectForm();
  startCapture("object");
  const statusEl = document.querySelector('[data-face-capture="object"] .face-capture__status');
  setTimeout(() => { if (statusEl) statusEl.textContent = t("objects.cameraLive"); }, 500);
}

function resetObjectForm() {
  objectCapturedPhoto = null;
  document.getElementById("object-capture-area").style.display = "block";
  document.getElementById("object-form").style.display = "none";
  document.getElementById("object-form").reset();
  document.getElementById("object-form-error").textContent = "";
  document.querySelectorAll('#object-form [data-error]').forEach((el) => (el.textContent = ""));
}

document.getElementById("object-scan-btn").addEventListener("click", async () => {
  const statusEl = document.querySelector('[data-face-capture="object"] .face-capture__status');
  if (statusEl) statusEl.textContent = "Getting a clear frame\u2026";
  const frame = await grabLiveFrameWithRetry("object");
  if (!frame) {
    if (statusEl) statusEl.textContent = "Camera isn't ready yet \u2014 please allow camera access.";
    return;
  }
  objectCapturedPhoto = frame;
  stopCapture("object");
  document.getElementById("object-capture-area").style.display = "none";
  document.getElementById("object-form").style.display = "block";
  document.getElementById("object-name").focus();
});

document.getElementById("object-retake-btn").addEventListener("click", () => {
  resetObjectForm();
  startCapture("object");
});

document.getElementById("object-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.getElementById("object-form-error").textContent = "";
  document.querySelectorAll('#object-form [data-error]').forEach((el) => (el.textContent = ""));

  const name = document.getElementById("object-name").value.trim();
  const location_note = document.getElementById("object-location").value.trim();

  try {
    const res = await fetch("/api/objects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location_note, image: objectCapturedPhoto }),
    });
    const data = await res.json();
    if (data.ok) {
      resetObjectForm();
      startCapture("object");
    } else {
      Object.entries(data.errors || {}).forEach(([key, message]) => {
        const el = document.querySelector(`#object-form [data-error="${key}"]`);
        if (el) el.textContent = message;
      });
      document.getElementById("object-form-error").textContent = "Please fix the highlighted fields.";
    }
  } catch (err) {
    document.getElementById("object-form-error").textContent = "Something went wrong. Check your connection.";
  }
});

/* -- Search / browse -- */
let objectsCache = [];

async function showObjectSearchView() {
  stopCapture("object");
  document.getElementById("object-add-area").style.display = "none";
  document.getElementById("object-search-area").style.display = "block";
  document.getElementById("object-search-input").value = "";

  const statusEl = document.getElementById("object-list-status");
  statusEl.textContent = t("common.loading");
  renderObjectList([]);

  try {
    const res = await fetch("/api/objects");
    const data = await res.json();
    if (data.ok) {
      objectsCache = data.objects;
      statusEl.textContent = objectsCache.length ? "" : "Nothing saved yet \u2014 add an object first.";
      renderObjectList(objectsCache);
    } else {
      statusEl.textContent = data.error || "Could not load the list.";
    }
  } catch (err) {
    statusEl.textContent = "Something went wrong. Check your connection.";
  }
}
document.getElementById("object-search-btn").addEventListener("click", showObjectSearchView);
document.getElementById("object-search-back").addEventListener("click", showObjectAddView);

document.getElementById("object-search-input").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = q
    ? objectsCache.filter((o) => o.name.toLowerCase().includes(q) || o.location_note.toLowerCase().includes(q))
    : objectsCache;
  renderObjectList(filtered);
  document.getElementById("object-list-status").textContent = q && filtered.length === 0 ? "No matches." : "";
});

function renderObjectList(objects) {
  const list = document.getElementById("object-list");
  list.innerHTML = "";
  objects.forEach((o) => {
    const li = document.createElement("li");
    li.className = "known-people-item";

    const avatarWrap = document.createElement("div");
    avatarWrap.className = "avatar-circle avatar-circle--sm";
    if (o.photo_url) {
      const img = document.createElement("img");
      img.src = o.photo_url;
      img.alt = o.name;
      avatarWrap.appendChild(img);
      avatarWrap.style.cursor = "pointer";
      avatarWrap.addEventListener("click", () => openImageLightbox(o.photo_url, o.name));
    } else {
      const icon = document.createElement("i");
      icon.className = "ti ti-box";
      avatarWrap.appendChild(icon);
    }

    const body = document.createElement("div");
    body.className = "known-people-item__body";
    const nameP = document.createElement("p");
    nameP.textContent = o.name;
    const locSpan = document.createElement("span");
    locSpan.className = "meta";
    locSpan.textContent = o.location_note;
    body.appendChild(nameP);
    body.appendChild(locSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "timetable-item__icon-btn";
    deleteBtn.innerHTML = '<i class="ti ti-trash" aria-hidden="true"></i>';
    deleteBtn.setAttribute("aria-label", "Delete");
    deleteBtn.addEventListener("click", async () => {
      if (!window.confirm(`Remove "${o.name}" from your saved items?`)) return;
      await fetch(`/api/objects/${o.id}`, { method: "DELETE" }).catch(() => { });
      showObjectSearchView();
    });

    li.appendChild(avatarWrap);
    li.appendChild(body);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

/* ================= Quiz & Games ================= */
const QUIZ_TIME_LIMIT_MS = 60000; // 1 minute per question
const AUTO_ADVANCE_SECONDS = 5;   // moves to the next question/round automatically -- no manual "Next" button

function createAutoAdvancer() {
  let interval = null;
  let timeout = null;
  return {
    start(labelEl, onDone) {
      this.clear();
      let remaining = AUTO_ADVANCE_SECONDS;
      const update = () => { if (labelEl) labelEl.textContent = `${t("quiz.nextIn")} ${remaining}s\u2026`; };
      update();
      interval = setInterval(() => {
        remaining -= 1;
        if (remaining > 0) update();
      }, 1000);
      timeout = setTimeout(() => {
        this.clear();
        onDone();
      }, AUTO_ADVANCE_SECONDS * 1000);
    },
    clear() {
      if (interval) { clearInterval(interval); interval = null; }
      if (timeout) { clearTimeout(timeout); timeout = null; }
      return this;
    },
  };
}
const quizAutoAdvancer = createAutoAdvancer();
const gameAutoAdvancer = createAutoAdvancer();

let quizPeriodType = "daily";
let quizQuestions = [];
let quizCurrentIndex = 0;
let quizTotalCount = 0;
let quizCorrectCount = 0;
let quizTotalPoints = 0;
let quizQuestionStartTime = null;
let quizTimerInterval = null;
let quizDateOverride = null; // set when catching up on a past day's quiz via History
let gameDateOverride = null; // set when catching up on a past day's game via History

function openQuizModal() {
  document.getElementById("quiz-modal").classList.add("is-open");
  showQuizMainView();
  quizDateOverride = null;
  gameDateOverride = null;
  setQuizTab("daily");
}
function closeQuizModal() {
  document.getElementById("quiz-modal").classList.remove("is-open");
  stopQuizTimer();
  quizAutoAdvancer.clear();
  gameAutoAdvancer.clear();
}
document.getElementById("quiz-modal-close").addEventListener("click", closeQuizModal);
document.getElementById("quiz-modal").addEventListener("click", (e) => {
  if (e.target.id === "quiz-modal") closeQuizModal();
});
document.getElementById("quiz-done-btn").addEventListener("click", closeQuizModal);

document.querySelectorAll(".quiz-tab[data-quiz-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    quizDateOverride = null;
    gameDateOverride = null;
    quizAutoAdvancer.clear();
    gameAutoAdvancer.clear();
    setQuizTab(tab.getAttribute("data-quiz-tab"));
  });
});

function setQuizTab(type) {
  quizPeriodType = type;
  document.querySelectorAll(".quiz-tab[data-quiz-tab]").forEach((t) => {
    t.classList.toggle("is-active", t.getAttribute("data-quiz-tab") === type);
  });
  if (type === "daily") {
    gameAutoAdvancer.clear();
    document.getElementById("weekly-games-area").style.display = "none";
    document.getElementById("quiz-progress-dots").style.display = "flex";
    document.getElementById("quiz-status").style.display = "block";
    loadQuiz();
  } else {
    stopQuizTimer();
    quizAutoAdvancer.clear();
    document.getElementById("quiz-progress-dots").style.display = "none";
    document.getElementById("quiz-question-area").style.display = "none";
    document.getElementById("quiz-summary").classList.remove("is-visible");
    document.getElementById("weekly-games-area").style.display = "block";
    loadWeeklyGame();
  }
}

async function loadQuiz() {
  stopQuizTimer();
  const statusEl = document.getElementById("quiz-status");
  statusEl.textContent = t("common.loading");
  document.getElementById("quiz-question-area").style.display = "none";
  document.getElementById("quiz-summary").classList.remove("is-visible");

  try {
    const url = quizDateOverride
      ? `/api/quiz/${quizPeriodType}?date=${encodeURIComponent(quizDateOverride)}`
      : `/api/quiz/${quizPeriodType}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.ok) {
      statusEl.textContent = data.error || "Could not load the quiz.";
      return;
    }
    quizQuestions = data.questions;
    quizTotalCount = data.total_count;
    quizCorrectCount = data.correct_count;
    quizTotalPoints = data.total_points;
    const levelText = data.phase ? `${t("quiz.level")} ${QUIZ_DIFFICULTY_LABELS[data.phase] || data.phase}` : "";
    statusEl.textContent = quizDateOverride ? `${t("quiz.catchingUpOn")} ${quizDateOverride}. ${levelText}` : levelText;

    renderQuizDots();
    const firstUnanswered = quizQuestions.findIndex((q) => !q.answered);
    if (firstUnanswered === -1) {
      showQuizSummary();
    } else {
      quizCurrentIndex = firstUnanswered;
      document.getElementById("quiz-question-area").style.display = "block";
      renderQuizQuestion(quizCurrentIndex);
    }
  } catch (err) {
    statusEl.textContent = "Something went wrong. Check your connection.";
  }
}

function renderQuizDots() {
  const wrap = document.getElementById("quiz-progress-dots");
  wrap.innerHTML = "";
  quizQuestions.forEach((q, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "quiz-dot";
    if (i === quizCurrentIndex) dot.classList.add("is-current");
    if (q.answered) dot.classList.add(q.is_correct ? "is-correct" : "is-wrong");
    dot.textContent = String(i + 1);
    dot.addEventListener("click", () => {
      quizCurrentIndex = i;
      document.getElementById("quiz-summary").classList.remove("is-visible");
      document.getElementById("quiz-question-area").style.display = "block";
      renderQuizQuestion(i);
      renderQuizDots();
    });
    wrap.appendChild(dot);
  });
}

function getQuizDifficultyLabels() { return { easy: t("diff.easy"), medium: t("diff.medium"), hard: t("diff.hard"), personal: t("diff.personal"), orientation: t("diff.orientation") }; }
const QUIZ_DIFFICULTY_LABELS = new Proxy({}, { get: (_, prop) => getQuizDifficultyLabels()[prop] });

function renderQuizQuestion(index) {
  stopQuizTimer();
  const q = quizQuestions[index];
  document.getElementById("quiz-category").textContent = q.category;

  const diffEl = document.getElementById("quiz-difficulty");
  const diffKey = q.difficulty || "easy";
  diffEl.textContent = QUIZ_DIFFICULTY_LABELS[diffKey] || diffKey;
  diffEl.className = "quiz-difficulty-badge diff-" + diffKey;

  document.getElementById("quiz-prompt").textContent = q.prompt;

  const optionsWrap = document.getElementById("quiz-options");
  optionsWrap.innerHTML = "";
  const feedbackEl = document.getElementById("quiz-feedback");
  feedbackEl.classList.remove("is-visible", "is-correct", "is-wrong");
  quizAutoAdvancer.clear();
  document.getElementById("quiz-auto-advance-label").textContent = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option-btn";
    btn.textContent = opt;
    if (q.answered) {
      btn.disabled = true;
      if (opt === q.correct_answer) btn.classList.add("is-correct");
    } else {
      btn.addEventListener("click", () => submitQuizAnswer(index, opt));
    }
    optionsWrap.appendChild(btn);
  });

  if (q.answered) {
    showQuizFeedback(q.is_correct, q.points_earned, q.correct_answer);
    setQuizNextButton(index);
    updateQuizTimerDisplay(null); // hide/reset timer for already-answered questions
  } else {
    startQuizTimer(index);
  }
}

/* -- 1-minute-per-question timer: auto-submits a blank (always-wrong) answer on expiry -- */
function startQuizTimer(index) {
  quizQuestionStartTime = Date.now();
  updateQuizTimerDisplay(QUIZ_TIME_LIMIT_MS);
  quizTimerInterval = setInterval(() => {
    const remaining = QUIZ_TIME_LIMIT_MS - (Date.now() - quizQuestionStartTime);
    if (remaining <= 0) {
      stopQuizTimer();
      submitQuizAnswer(index, ""); // timed out -- empty selection never matches, so this is always wrong (0 points)
    } else {
      updateQuizTimerDisplay(remaining);
    }
  }, 250);
}
function stopQuizTimer() {
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
}
function updateQuizTimerDisplay(remainingMs) {
  const timerEl = document.getElementById("quiz-timer");
  const valueEl = document.getElementById("quiz-timer-value");
  if (remainingMs === null) {
    timerEl.style.visibility = "hidden";
    return;
  }
  timerEl.style.visibility = "visible";
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  valueEl.textContent = `${m}:${String(s).padStart(2, "0")}`;
  timerEl.classList.toggle("is-low", totalSeconds <= 10);
}

function showQuizFeedback(isCorrect, points, correctAnswer) {
  const feedbackEl = document.getElementById("quiz-feedback");
  feedbackEl.classList.add("is-visible", isCorrect ? "is-correct" : "is-wrong");
  feedbackEl.textContent = isCorrect
    ? `${t("quiz.correctFeedback")} ${points} ${points === 1 ? t("game.point") : t("game.points")}.`
    : `${t("quiz.notQuite")} "${correctAnswer}".`;
}

function setQuizNextButton(index) {
  const labelEl = document.getElementById("quiz-auto-advance-label");
  if (index < quizQuestions.length - 1) {
    quizAutoAdvancer.start(labelEl, () => {
      quizCurrentIndex = index + 1;
      renderQuizQuestion(quizCurrentIndex);
      renderQuizDots();
    });
  } else {
    quizAutoAdvancer.start(labelEl, () => showQuizSummary());
  }
}

async function submitQuizAnswer(index, selectedOption) {
  stopQuizTimer();
  const responseTimeMs = quizQuestionStartTime ? Math.min(Date.now() - quizQuestionStartTime, QUIZ_TIME_LIMIT_MS) : null;
  document.querySelectorAll("#quiz-options .quiz-option-btn").forEach((b) => (b.disabled = true));
  updateQuizTimerDisplay(null);

  try {
    const res = await fetch(`/api/quiz/${quizPeriodType}/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question_index: index, selected_option: selectedOption, response_time_ms: responseTimeMs,
        date: quizDateOverride || undefined,
      }),
    });
    const data = await res.json();
    if (!data.ok) {
      document.getElementById("quiz-status").textContent = data.error || "Something went wrong.";
      document.querySelectorAll("#quiz-options .quiz-option-btn").forEach((b) => (b.disabled = false));
      return;
    }

    const q = quizQuestions[index];
    q.answered = true;
    q.is_correct = data.is_correct;
    q.points_earned = data.points_earned;
    q.correct_answer = data.correct_answer;

    document.querySelectorAll("#quiz-options .quiz-option-btn").forEach((btn) => {
      if (btn.textContent === data.correct_answer) btn.classList.add("is-correct");
      else if (btn.textContent === selectedOption && !data.is_correct) btn.classList.add("is-wrong");
    });

    const feedbackEl = document.getElementById("quiz-feedback");
    if (!selectedOption) {
      feedbackEl.classList.add("is-visible", "is-wrong");
      feedbackEl.textContent = `Time's up \u2014 the correct answer was "${data.correct_answer}".`;
    } else {
      showQuizFeedback(data.is_correct, data.points_earned, data.correct_answer);
    }

    if (data.is_correct) { quizCorrectCount += 1; quizTotalPoints += data.points_earned; }
    setQuizNextButton(index);
    renderQuizDots();
    refreshQuizStat();
    loadGrowthCharts();
  } catch (err) {
    document.getElementById("quiz-status").textContent = "Something went wrong. Check your connection.";
    document.querySelectorAll("#quiz-options .quiz-option-btn").forEach((b) => (b.disabled = false));
  }
}

function showQuizSummary() {
  stopQuizTimer();
  document.getElementById("quiz-question-area").style.display = "none";
  document.getElementById("quiz-summary").classList.add("is-visible");
  const pct = quizTotalCount ? Math.round((quizCorrectCount / quizTotalCount) * 100) : 0;
  document.getElementById("quiz-summary-score").textContent = `${quizTotalPoints} ${t("quiz.pointsWord")}`;
  document.getElementById("quiz-summary-detail").textContent =
    `${quizCorrectCount} ${t("quiz.of")} ${quizTotalCount} ${t("quiz.correctWord")} (${pct}%) \u2014 ${t("quiz.comeBack")} ${quizPeriodType === "daily" ? t("quiz.tomorrow") : t("quiz.nextWeek")} ${t("quiz.forNewSet")}.`;
}

async function refreshQuizStat() {
  const quizEl = document.getElementById("stat-quiz-value");
  if (!quizEl) return;
  try {
    const res = await fetch("/api/quiz/stats");
    const data = await res.json();
    if (!data.ok) return;

    const quizPart = data.answered_this_week > 0 ? `${t("stat.quizLabel")} ${data.accuracy_this_week}%` : null;
    const gamesPart = data.games_answered_this_week > 0 ? `${t("stat.gamesLabel")} ${data.games_accuracy_this_week}%` : null;

    if (quizPart && gamesPart) {
      quizEl.textContent = `${quizPart} \u00b7 ${gamesPart}`;
    } else if (quizPart) {
      quizEl.textContent = quizPart;
    } else if (gamesPart) {
      quizEl.textContent = gamesPart;
    } else {
      quizEl.textContent = t("stat.noDataYet");
    }
  } catch (err) {
    // leave whatever was already shown
  }
}

/* -- View switching between quiz, games, and History -- */
function showQuizMainView() {
  document.getElementById("quiz-history").classList.remove("is-visible");
  document.getElementById("quiz-day-detail").classList.remove("is-visible");
  document.querySelector(".quiz-tabs").parentElement.style.display = "flex";
  document.getElementById("quiz-progress-dots").style.display = "flex";
  document.getElementById("quiz-status").style.display = "block";
}

/* -- History: date-wise quiz + game completion, with catch-up -- */
function showQuizHistoryView() {
  stopQuizTimer();
  quizAutoAdvancer.clear();
  gameAutoAdvancer.clear();
  document.querySelector(".quiz-tabs").parentElement.style.display = "none";
  document.getElementById("quiz-progress-dots").style.display = "none";
  document.getElementById("quiz-status").style.display = "none";
  document.getElementById("quiz-question-area").style.display = "none";
  document.getElementById("quiz-summary").classList.remove("is-visible");
  document.getElementById("weekly-games-area").style.display = "none";
  document.getElementById("quiz-history").classList.add("is-visible");
  loadQuizHistory();
}
document.getElementById("quiz-history-btn").addEventListener("click", showQuizHistoryView);
document.getElementById("quiz-history-back").addEventListener("click", () => {
  showQuizMainView();
  quizDateOverride = null;
  gameDateOverride = null;
  setQuizTab("daily");
});

async function loadQuizHistory() {
  const statusEl = document.getElementById("quiz-history-status");
  const listEl = document.getElementById("quiz-history-list");
  statusEl.textContent = t("common.loading");
  listEl.innerHTML = "";

  try {
    const res = await fetch("/api/progress/history");
    const data = await res.json();
    if (!data.ok) {
      statusEl.textContent = data.error || "Could not load this.";
      return;
    }
    statusEl.textContent = "";

    data.days.forEach((day) => {
      const li = document.createElement("li");
      li.className = "quiz-history-item";

      const dateRow = document.createElement("div");
      dateRow.style.display = "flex";
      dateRow.style.alignItems = "center";
      dateRow.style.justifyContent = "space-between";
      const dateP = document.createElement("p");
      dateP.className = "quiz-history-item__date";
      dateP.style.margin = "0";
      const dObj = new Date(day.date + "T00:00:00");
      dateP.textContent = dObj.toLocaleDateString(currentLocaleTag(), { weekday: "short", day: "numeric", month: "short" });
      const analyzeBtn = document.createElement("button");
      analyzeBtn.type = "button";
      analyzeBtn.className = "quiz-history-item__play";
      analyzeBtn.innerHTML = `<i class="ti ti-chart-bar" aria-hidden="true"></i> ${t("history.analyze")}`;
      analyzeBtn.addEventListener("click", () => showQuizDayDetail(day.date));
      dateRow.appendChild(dateP);
      dateRow.appendChild(analyzeBtn);
      li.appendChild(dateRow);

      li.appendChild(buildHistoryRow("Quiz", day.quiz.completed, `${day.quiz.answered}/${day.quiz.total}`, () => {
        quizDateOverride = day.date;
        showQuizMainView();
        setQuizTab("daily");
      }));

      const gameMeta = WEEKLY_GAME_META[day.game.game_type];
      const gameLabel = gameMeta ? `${gameMeta.icon} ${gameMeta.label}` : "Game";
      li.appendChild(buildHistoryRow(gameLabel, day.game.completed, `${day.game.answered}/${day.game.total}`, () => {
        gameDateOverride = day.date;
        showQuizMainView();
        setQuizTab("weekly");
      }));

      listEl.appendChild(li);
    });
  } catch (err) {
    statusEl.textContent = "Something went wrong. Check your connection.";
  }
}

function buildHistoryRow(label, completed, fraction, onPlay) {
  const row = document.createElement("div");
  row.className = "quiz-history-item__row";

  const labelSpan = document.createElement("span");
  labelSpan.className = "quiz-history-item__label";
  const icon = document.createElement("span");
  icon.className = `quiz-history-item__icon ${completed ? "status-done" : "status-missed"}`;
  const iconGlyph = document.createElement("i");
  iconGlyph.className = completed ? "ti ti-check" : "ti ti-x";
  icon.appendChild(iconGlyph);
  labelSpan.appendChild(icon);
  labelSpan.appendChild(document.createTextNode(` ${label} (${fraction})`));
  row.appendChild(labelSpan);

  if (!completed) {
    const playBtn = document.createElement("button");
    playBtn.type = "button";
    playBtn.className = "quiz-history-item__play";
    playBtn.textContent = t("history.play");
    playBtn.addEventListener("click", onPlay);
    row.appendChild(playBtn);
  }

  return row;
}

/* -- Per-day Analyze: exactly which questions/rounds were attempted that day -- */
let quizDayDetailCurrentDate = null;

function showQuizDayDetail(date) {
  quizDayDetailCurrentDate = date;
  quizAutoAdvancer.clear();
  gameAutoAdvancer.clear();
  document.getElementById("quiz-history").classList.remove("is-visible");
  document.getElementById("quiz-day-detail").classList.add("is-visible");
  const dObj = new Date(date + "T00:00:00");
  document.getElementById("quiz-day-detail-title").textContent =
    dObj.toLocaleDateString(currentLocaleTag(), { weekday: "long", day: "numeric", month: "short" });
  loadQuizDayDetail(date);
}
document.getElementById("quiz-day-detail-back").addEventListener("click", () => {
  document.getElementById("quiz-day-detail").classList.remove("is-visible");
  document.getElementById("quiz-history").classList.add("is-visible");
});

async function loadQuizDayDetail(date) {
  const statusEl = document.getElementById("quiz-day-detail-status");
  const quizListEl = document.getElementById("quiz-day-detail-quiz-list");
  const gameListEl = document.getElementById("quiz-day-detail-game-list");
  statusEl.textContent = t("common.loading");
  quizListEl.innerHTML = "";
  gameListEl.innerHTML = "";

  try {
    const res = await fetch(`/api/progress/day-detail?date=${encodeURIComponent(date)}`);
    const data = await res.json();
    if (!data.ok) {
      statusEl.textContent = data.error || "Could not load this.";
      return;
    }
    statusEl.textContent = "";

    const gameMeta = WEEKLY_GAME_META[data.game_type];
    document.getElementById("quiz-day-detail-game-heading").textContent =
      gameMeta ? `${gameMeta.icon} ${gameMeta.label}` : "Game";

    data.quiz.forEach((q) => quizListEl.appendChild(buildDayDetailItem(q)));
    data.game.forEach((g) => gameListEl.appendChild(buildDayDetailItem(g)));
  } catch (err) {
    statusEl.textContent = "Something went wrong. Check your connection.";
  }
}

function buildDayDetailItem(item) {
  const li = document.createElement("li");
  li.className = "quiz-analysis-item";

  if (item.unavailable) {
    li.classList.add("status-unattempted");
    const p = document.createElement("p");
    p.className = "q";
    p.textContent = "Not available that day.";
    li.appendChild(p);
    return li;
  }

  const statusClass = !item.attempted ? "status-unattempted" : (item.is_correct ? "status-correct" : "status-wrong");
  li.classList.add(statusClass);

  const meta = document.createElement("div");
  meta.className = "quiz-analysis-item__meta";
  meta.textContent = !item.attempted ? t("dayDetail.notAttempted") : (item.is_correct ? t("dayDetail.correct") : t("dayDetail.incorrect"));
  li.appendChild(meta);

  const qP = document.createElement("p");
  qP.className = "q";
  qP.textContent = item.prompt || `Round ${item.index + 1}`;
  li.appendChild(qP);

  // Only reveal the correct answer for questions actually attempted, so an
  // un-attempted day's content isn't spoiled if the person wants to catch up on it.
  if (item.attempted && item.correct_answer) {
    const aP = document.createElement("p");
    aP.className = "a";
    aP.textContent = `${t("dayDetail.correctAnswer")} ${item.correct_answer}`;
    li.appendChild(aP);
  }

  return li;
}

/* ================= Weekly Games ================= */
/* Sunday-only. One of 7 games, rotating so the same game never repeats until
   the full 7-week cycle is done (server-side, see _weekly_game_type_for in
   app.py). This section intentionally looks and feels different from the
   daily quiz -- brighter, bouncier, more playful. */

const WEEKLY_GAME_META = {
  memory_match: { icon: "\ud83e\udde0", label: "Memory Match" },
  math: { icon: "\ud83d\udd22", label: "Basic Math" },
  word_association: { icon: "\ud83d\udcac", label: "Word Association" },
  color_hunt: { icon: "\ud83c\udfa8", label: "Color Hunt" },
  connect_dots: { icon: "\u270f\ufe0f", label: "Connect the Dots" },
  where_is_this: { icon: "\ud83d\uddfa\ufe0f", label: "Where Is This?" },
  picture_memory: { icon: "\ud83d\udcf8", label: "Picture Memory" },
};
const MEMORY_SYMBOL_MAP = {
  DOG: "\ud83d\udc36", CAT: "\ud83d\udc31", APPLE: "\ud83c\udf4e", BANANA: "\ud83c\udf4c",
  STAR: "\u2b50", HEART: "\u2764\ufe0f", CAR: "\ud83d\ude97", MOON: "\ud83c\udf19",
};
const WHERE_IS_THIS_SCENE_MAP = {
  SCHOOL: "\ud83c\udfeb\ud83d\udcda", HOSPITAL: "\ud83c\udfe5\ud83d\ude91", PARK: "\ud83c\udf33\ud83c\udfde\ufe0f",
  BEACH: "\ud83c\udfd6\ufe0f\ud83c\udf0a", FARM: "\ud83c\udf3e\ud83d\udc04", MARKET: "\ud83d\udecd\ufe0f\ud83e\udd66",
  LIBRARY: "\ud83d\udcda\ud83e\ude91", TRAIN_STATION: "\ud83d\ude82\ud83c\udf9f\ufe0f", ZOO: "\ud83e\udd81\ud83d\udc18",
  MUSEUM: "\ud83c\udfdb\ufe0f\ud83d\uddbc\ufe0f", MOUNTAIN: "\ud83c\udfd4\ufe0f\ud83c\udf32", LIVING_ROOM: "\ud83c\udfe0\ud83d\udecb\ufe0f",
  BUS_STOP: "\ud83c\udfe9\ud83d\udee4\ufe0f", TEMPLE: "\ud83d\udd4c\ud83d\udd6f\ufe0f", RESTAURANT: "\ud83c\udf7d\ufe0f\ud83e\udd44",
};

let weeklyGameType = null;
let weeklyGameRounds = [];
let weeklyGamePhase = "easy";
let weeklyGameCorrect = 0;
let weeklyGamePoints = 0;
let weeklyGameTotalCount = 0;
let weeklyGameCurrentIndex = 0;

async function loadWeeklyGame() {
  const active = document.getElementById("weekly-game-active");
  const summary = document.getElementById("weekly-game-summary");
  active.style.display = "none";
  summary.style.display = "none";
  document.getElementById("quiz-status").style.display = "block";
  document.getElementById("quiz-status").textContent = t("common.loading");

  try {
    const url = gameDateOverride
      ? `/api/games/daily?date=${encodeURIComponent(gameDateOverride)}`
      : "/api/games/daily";
    const res = await fetch(url);
    const data = await res.json();
    if (!data.ok) {
      document.getElementById("quiz-status").textContent = data.error || "Could not load this.";
      return;
    }

    weeklyGameType = data.game_type;
    weeklyGameRounds = data.rounds;
    weeklyGamePhase = data.phase;
    weeklyGameCorrect = data.correct_count;
    weeklyGamePoints = data.total_points;
    weeklyGameTotalCount = data.total_count;

    document.getElementById("quiz-status").textContent = gameDateOverride ? `${t("quiz.catchingUpOn")} ${gameDateOverride}.` : "";

    if (data.unavailable) {
      showWeeklyUnavailable(data.unavailable_reason);
      return;
    }

    const firstUnanswered = weeklyGameRounds.findIndex((r) => !r.answered);
    if (firstUnanswered === -1) {
      showWeeklyGameSummary();
    } else {
      weeklyGameCurrentIndex = firstUnanswered;
      renderWeeklyGameRound(firstUnanswered);
    }
  } catch (err) {
    document.getElementById("quiz-status").textContent = "Something went wrong. Check your connection.";
  }
}

function showWeeklyUnavailable(reason) {
  document.getElementById("weekly-game-active").style.display = "block";
  document.getElementById("weekly-game-title").textContent = t("game.notAvailable");
  document.getElementById("weekly-game-difficulty").textContent = "";
  document.getElementById("weekly-game-body").innerHTML = "";
  const p = document.createElement("p");
  p.className = "fun-status";
  p.style.padding = "24px 0";
  p.textContent = reason;
  document.getElementById("weekly-game-body").appendChild(p);
  document.getElementById("weekly-game-feedback").classList.remove("is-visible");
  gameAutoAdvancer.clear();
  document.getElementById("weekly-game-auto-advance-label").textContent = "";
}

function renderWeeklyGameRound(index) {
  document.getElementById("weekly-game-summary").style.display = "none";
  document.getElementById("weekly-game-active").style.display = "block";

  const meta = WEEKLY_GAME_META[weeklyGameType] || { icon: "\ud83c\udfae", label: weeklyGameType };
  document.getElementById("weekly-game-title").textContent = `${meta.icon} ${meta.label}`;
  const diffEl = document.getElementById("weekly-game-difficulty");
  diffEl.textContent = QUIZ_DIFFICULTY_LABELS[weeklyGamePhase] || weeklyGamePhase;
  diffEl.className = "quiz-difficulty-badge diff-" + weeklyGamePhase;

  const feedbackEl = document.getElementById("weekly-game-feedback");
  feedbackEl.classList.remove("is-visible", "is-correct", "is-wrong");
  gameAutoAdvancer.clear();
  document.getElementById("weekly-game-auto-advance-label").textContent = "";

  const round = weeklyGameRounds[index];
  const body = document.getElementById("weekly-game-body");
  body.innerHTML = "";

  if (weeklyGameType === "memory_match") renderMemoryMatch(body, round, index);
  else if (weeklyGameType === "connect_dots") renderConnectDots(body, round, index);
  else if (weeklyGameType === "color_hunt") renderColorHunt(body, round, index);
  else if (weeklyGameType === "picture_memory") renderPictureMemory(body, round, index);
  else if (weeklyGameType === "where_is_this") renderWhereIsThis(body, round, index);
  else renderGenericMCQ(body, round, index); // math, word_association
}

/* -- Shared MCQ rendering (math, word_association, where_is_this, picture_memory, color_hunt) -- */
function renderMCQOptions(body, round, index) {
  const wrap = document.createElement("div");
  wrap.className = "quiz-options";
  round.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option-btn fun-option-btn";
    btn.textContent = opt;
    if (round.answered) {
      btn.disabled = true;
      if (opt === round.correct_answer) btn.classList.add("is-correct");
    } else {
      btn.addEventListener("click", () => submitWeeklyGameMCQAnswer(index, opt));
    }
    wrap.appendChild(btn);
  });
  body.appendChild(wrap);
  if (round.answered) {
    showWeeklyGameFeedback(round.is_correct, round.points_earned, round.correct_answer);
    setWeeklyGameNextButton(index);
  }
}

function renderGenericMCQ(body, round, index) {
  const p = document.createElement("p");
  p.className = "fun-prompt";
  p.textContent = round.prompt;
  body.appendChild(p);
  renderMCQOptions(body, round, index);
}

function renderWhereIsThis(body, round, index) {
  const scene = document.createElement("div");
  scene.className = "where-is-this-scene";
  scene.textContent = WHERE_IS_THIS_SCENE_MAP[round.scene] || "\u2753";
  body.appendChild(scene);

  const p = document.createElement("p");
  p.className = "fun-prompt";
  p.textContent = "Where is this?";
  body.appendChild(p);

  renderMCQOptions(body, round, index);
}

function renderPictureMemory(body, round, index) {
  if (round.photo_url) {
    const img = document.createElement("img");
    img.src = round.photo_url;
    img.className = "picture-memory-photo";
    img.alt = "";
    body.appendChild(img);
  }
  const p = document.createElement("p");
  p.className = "fun-prompt";
  p.textContent = round.prompt;
  body.appendChild(p);
  renderMCQOptions(body, round, index);
}

function renderColorHunt(body, round, index) {
  const grid = document.createElement("div");
  grid.className = "color-hunt-grid";
  round.boxes.forEach((box) => {
    const cell = document.createElement("div");
    cell.className = "color-hunt-box";
    cell.style.background = box.hex;
    grid.appendChild(cell);
  });
  body.appendChild(grid);

  const p = document.createElement("p");
  p.className = "fun-prompt";
  p.textContent = round.prompt;
  body.appendChild(p);

  renderMCQOptions(body, round, index);
}

async function submitWeeklyGameMCQAnswer(index, selectedOption) {
  document.querySelectorAll("#weekly-game-body .quiz-option-btn").forEach((b) => (b.disabled = true));
  try {
    const res = await fetch("/api/games/daily/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ round_index: index, selected_option: selectedOption, date: gameDateOverride || undefined }),
    });
    const data = await res.json();
    if (!data.ok) {
      document.getElementById("quiz-status").textContent = data.error || "Something went wrong.";
      document.querySelectorAll("#weekly-game-body .quiz-option-btn").forEach((b) => (b.disabled = false));
      return;
    }
    const round = weeklyGameRounds[index];
    round.answered = true;
    round.is_correct = data.is_correct;
    round.points_earned = data.points_earned;
    round.correct_answer = data.correct_answer;

    document.querySelectorAll("#weekly-game-body .quiz-option-btn").forEach((btn) => {
      if (btn.textContent === data.correct_answer) btn.classList.add("is-correct");
      else if (btn.textContent === selectedOption && !data.is_correct) btn.classList.add("is-wrong");
    });

    if (data.is_correct) { weeklyGameCorrect += 1; weeklyGamePoints += data.points_earned; }
    showWeeklyGameFeedback(data.is_correct, data.points_earned, data.correct_answer);
    setWeeklyGameNextButton(index);
    refreshQuizStat();
    loadGrowthCharts();
  } catch (err) {
    document.getElementById("quiz-status").textContent = "Something went wrong. Check your connection.";
    document.querySelectorAll("#weekly-game-body .quiz-option-btn").forEach((b) => (b.disabled = false));
  }
}

/* -- Memory Match: card-flip pairs game -- */
let memoryMatchState = null;

function renderMemoryMatch(body, round, index) {
  if (round.answered) {
    const p = document.createElement("p");
    p.className = "fun-prompt";
    p.textContent = round.is_correct ? t("game.alreadyCompleted") : t("game.alreadyPlayed");
    body.appendChild(p);
    showWeeklyGameFeedback(round.is_correct, round.points_earned, null);
    setWeeklyGameNextButton(index);
    return;
  }

  memoryMatchState = { cards: round.cards, flipped: [], matched: new Set(), mismatches: 0, pairs: round.pairs, roundIndex: index, locked: false };

  const cols = round.cards.length <= 8 ? 4 : (round.cards.length <= 12 ? 4 : 4);
  const grid = document.createElement("div");
  grid.className = "memory-match-grid";
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  round.cards.forEach((symbol, cardIdx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "memory-match-card";
    card.innerHTML = '<span class="memory-match-card__back">?</span>';
    card.addEventListener("click", () => flipMemoryCard(cardIdx, card));
    grid.appendChild(card);
  });
  body.appendChild(grid);

  const status = document.createElement("p");
  status.id = "memory-match-status";
  status.className = "fun-status";
  status.textContent = `Find all ${round.pairs} pairs!`;
  body.appendChild(status);
}

function flipMemoryCard(cardIdx, cardEl) {
  const st = memoryMatchState;
  if (!st || st.locked || st.matched.has(cardIdx) || st.flipped.some((f) => f.idx === cardIdx)) return;

  const symbol = st.cards[cardIdx];
  cardEl.innerHTML = `<span class="memory-match-card__front">${MEMORY_SYMBOL_MAP[symbol] || symbol}</span>`;
  cardEl.classList.add("is-flipped");
  st.flipped.push({ idx: cardIdx, el: cardEl });

  if (st.flipped.length === 2) {
    st.locked = true;
    const [a, b] = st.flipped;
    if (st.cards[a.idx] === st.cards[b.idx]) {
      st.matched.add(a.idx);
      st.matched.add(b.idx);
      a.el.classList.add("is-matched");
      b.el.classList.add("is-matched");
      st.flipped = [];
      st.locked = false;
      document.getElementById("memory-match-status").textContent = `${st.matched.size / 2} of ${st.pairs} pairs found!`;
      if (st.matched.size === st.cards.length) finishMemoryMatch();
    } else {
      st.mismatches += 1;
      setTimeout(() => {
        a.el.classList.remove("is-flipped");
        b.el.classList.remove("is-flipped");
        a.el.innerHTML = '<span class="memory-match-card__back">?</span>';
        b.el.innerHTML = '<span class="memory-match-card__back">?</span>';
        st.flipped = [];
        st.locked = false;
      }, 900);
    }
  }
}

async function finishMemoryMatch() {
  const st = memoryMatchState;
  try {
    const res = await fetch("/api/games/daily/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ round_index: st.roundIndex, pairs: st.pairs, mismatches: st.mismatches, date: gameDateOverride || undefined }),
    });
    const data = await res.json();
    weeklyGameRounds[st.roundIndex].answered = true;
    weeklyGameRounds[st.roundIndex].is_correct = data.is_correct;
    weeklyGameRounds[st.roundIndex].points_earned = data.points_earned;
    if (data.is_correct) { weeklyGameCorrect += 1; weeklyGamePoints += data.points_earned; }
    showWeeklyGameFeedback(data.is_correct, data.points_earned, null);
    setWeeklyGameNextButton(st.roundIndex);
    refreshQuizStat();
    loadGrowthCharts();
  } catch (err) {
    document.getElementById("quiz-status").textContent = "Something went wrong submitting your result.";
  }
}

/* -- Connect the Dots: click numbered dots in order -- */
let connectDotsState = null;

function renderConnectDots(body, round, index) {
  if (round.answered) {
    const p = document.createElement("p");
    p.className = "fun-prompt";
    p.textContent = round.is_correct ? `${t("game.tracedPrefix")} ${round.shape_name}${t("game.tracedSuffix")}` : t("game.alreadyPlayed");
    body.appendChild(p);
    showWeeklyGameFeedback(round.is_correct, round.points_earned, null);
    setWeeklyGameNextButton(index);
    return;
  }

  connectDotsState = { points: round.points, nextIndex: 0, mistakes: 0, roundIndex: index };

  const wrap = document.createElement("div");
  wrap.className = "connect-dots-wrap";
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 300 220");
  svg.setAttribute("class", "connect-dots-svg");

  const pathEl = document.createElementNS(svgNS, "polyline");
  pathEl.setAttribute("points", "");
  pathEl.setAttribute("class", "connect-dots-path");
  pathEl.id = "connect-dots-path";
  svg.appendChild(pathEl);

  round.points.forEach(([x, y], i) => {
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 12);
    circle.setAttribute("class", "connect-dots-dot");
    circle.addEventListener("click", () => clickDot(i, circle));
    svg.appendChild(circle);

    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", x);
    label.setAttribute("y", y + 4);
    label.setAttribute("class", "connect-dots-label");
    label.textContent = String(i + 1);
    svg.appendChild(label);
  });

  wrap.appendChild(svg);
  body.appendChild(wrap);

  const status = document.createElement("p");
  status.id = "connect-dots-status";
  status.className = "fun-status";
  status.textContent = `Tap the dots in order, starting with 1! (${round.points.length} dots)`;
  body.appendChild(status);
}

function clickDot(idx, circleEl) {
  const st = connectDotsState;
  if (!st) return;
  if (idx === st.nextIndex) {
    circleEl.classList.add("is-connected");
    st.nextIndex += 1;
    const pts = st.points.slice(0, st.nextIndex).map(([x, y]) => `${x},${y}`).join(" ");
    document.getElementById("connect-dots-path").setAttribute("points", pts);
    document.getElementById("connect-dots-status").textContent = `${st.nextIndex} of ${st.points.length} dots connected!`;
    if (st.nextIndex === st.points.length) finishConnectDots();
  } else {
    st.mistakes += 1;
    circleEl.classList.add("is-wrong-click");
    setTimeout(() => circleEl.classList.remove("is-wrong-click"), 400);
  }
}

async function finishConnectDots() {
  const st = connectDotsState;
  try {
    const res = await fetch("/api/games/daily/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ round_index: st.roundIndex, total_dots: st.points.length, mistakes: st.mistakes, date: gameDateOverride || undefined }),
    });
    const data = await res.json();
    weeklyGameRounds[st.roundIndex].answered = true;
    weeklyGameRounds[st.roundIndex].is_correct = data.is_correct;
    weeklyGameRounds[st.roundIndex].points_earned = data.points_earned;
    if (data.is_correct) { weeklyGameCorrect += 1; weeklyGamePoints += data.points_earned; }
    showWeeklyGameFeedback(data.is_correct, data.points_earned, null);
    setWeeklyGameNextButton(st.roundIndex);
    refreshQuizStat();
    loadGrowthCharts();
  } catch (err) {
    document.getElementById("quiz-status").textContent = "Something went wrong submitting your result.";
  }
}

/* -- Shared feedback / next / summary -- */
function showWeeklyGameFeedback(isCorrect, points, correctAnswer) {
  const el = document.getElementById("weekly-game-feedback");
  el.classList.add("is-visible", isCorrect ? "is-correct" : "is-wrong");
  el.textContent = isCorrect
    ? `\ud83c\udf89 ${t("game.wonderful")} ${points} ${points === 1 ? t("game.point") : t("game.points")}.`
    : (correctAnswer ? `${t("game.notQuitePrefix")} "${correctAnswer}". ${t("game.niceTry")}` : t("game.goodEffort"));
}

function setWeeklyGameNextButton(index) {
  const labelEl = document.getElementById("weekly-game-auto-advance-label");
  if (index < weeklyGameRounds.length - 1) {
    gameAutoAdvancer.start(labelEl, () => {
      weeklyGameCurrentIndex = index + 1;
      renderWeeklyGameRound(weeklyGameCurrentIndex);
    });
  } else {
    gameAutoAdvancer.start(labelEl, () => showWeeklyGameSummary());
  }
}

function showWeeklyGameSummary() {
  document.getElementById("weekly-game-active").style.display = "none";
  document.getElementById("weekly-game-summary").style.display = "block";
  const pct = weeklyGameTotalCount ? Math.round((weeklyGameCorrect / weeklyGameTotalCount) * 100) : 0;
  document.getElementById("weekly-game-summary-score").textContent = `${weeklyGamePoints} ${t("game.pointsExclaim")}`;
  document.getElementById("weekly-game-summary-detail").textContent =
    `${weeklyGameCorrect} ${t("quiz.of")} ${weeklyGameTotalCount} ${t("quiz.correctWord")} (${pct}%) \u2014 ${t("game.seeYouTomorrow")}`;
}

document.getElementById("weekly-game-done-btn").addEventListener("click", closeQuizModal);

/* ================= Emergency SOS ================= */


function openEmergencyModal() {
  document.getElementById("emergency-modal").classList.add("is-open");
}
function closeEmergencyModal() {
  document.getElementById("emergency-modal").classList.remove("is-open");
}
document.getElementById("emergency-modal-close").addEventListener("click", closeEmergencyModal);
document.getElementById("emergency-modal").addEventListener("click", (e) => {
  if (e.target.id === "emergency-modal") closeEmergencyModal();
});

async function triggerEmergency() {
  openEmergencyModal();
  const body = document.getElementById("emergency-modal-body");
  body.innerHTML = `
    <div class="emergency-status">
      <i class="ti ti-loader-2" aria-hidden="true"></i>
      <h2>${t("emergency.sending")}</h2>
    </div>`;

  try {
    const res = await fetch("/api/emergency/trigger", { method: "POST" });
    const data = await res.json();
    if (!data.ok) {
      renderEmergencyResult(false, data.error || "Something went wrong.", data.contacts);
      return;
    }
    renderEmergencyResult(true, null, data.contacts, data.caretaker_name, data.remaining_this_hour);
  } catch (err) {
    renderEmergencyResult(false, "Could not reach the server. Please call for help directly using the numbers below.", null);
  }
}

let lastEmergencyResult = null;

function renderEmergencyResult(sent, errorMessage, contacts, caretakerName, remaining) {
  lastEmergencyResult = [sent, errorMessage, contacts, caretakerName, remaining];
  const body = document.getElementById("emergency-modal-body");
  const statusHtml = sent
    ? `<div class="emergency-status is-sent">
         <i class="ti ti-circle-check" aria-hidden="true"></i>
         <h2>${t("emergency.alertSent")}</h2>
         <p>${caretakerName ? `${caretakerName} ${t("emergency.notified")}` : t("emergency.caretakerNotified")}
            ${typeof remaining === "number" ? ` ${t("emergency.moreAlertsPrefix")} ${remaining} ${t("emergency.moreAlertsSuffix")}` : ""}</p>
       </div>`
    : `<div class="emergency-status is-limited">
         <i class="ti ti-alert-triangle" aria-hidden="true"></i>
         <h2>${t("emergency.couldNotSend")}</h2>
         <p>${errorMessage}</p>
       </div>`;

  body.innerHTML = statusHtml;

  const list = document.createElement("ul");
  list.className = "emergency-contact-list";
  const contactRows = [
    { icon: "ti-shield", label: t("emergency.police"), phone: contacts?.police },
    { icon: "ti-first-aid-kit", label: t("emergency.medical"), phone: contacts?.medical },
    { icon: "ti-flame", label: t("emergency.fire"), phone: contacts?.fire },
    { icon: "ti-user-heart", label: t("emergency.caretaker"), phone: contacts?.caretaker?.phone, name: contacts?.caretaker?.name, whatsappUrl: contacts?.caretaker?.whatsapp_url },
    { icon: "ti-home", label: t("emergency.neighbour"), phone: contacts?.neighbour_phone, whatsappUrl: contacts?.neighbour_whatsapp_url },
  ];
  contactRows.forEach((c) => list.appendChild(buildEmergencyContactRow(c)));
  body.appendChild(list);
}

function buildEmergencyContactRow(c) {
  const li = document.createElement("li");
  li.className = "emergency-contact-item";

  const iconSpan = document.createElement("span");
  iconSpan.className = "emergency-contact-item__icon";
  iconSpan.innerHTML = `<i class="ti ${c.icon}" aria-hidden="true"></i>`;

  const bodySpan = document.createElement("span");
  bodySpan.className = "emergency-contact-item__body";
  const p = document.createElement("p");
  p.textContent = c.label;
  const sub = document.createElement("span");
  sub.textContent = c.name ? `${c.name}${c.phone ? " \u00b7 " + c.phone : ""}` : (c.phone || t("emergency.notSetYet"));
  bodySpan.appendChild(p);
  bodySpan.appendChild(sub);

  li.appendChild(iconSpan);
  li.appendChild(bodySpan);

  const actions = document.createElement("span");
  actions.style.display = "flex";
  actions.style.gap = "6px";
  actions.style.flexShrink = "0";

  if (c.phone) {
    const callLink = document.createElement("a");
    callLink.className = "emergency-contact-item__call";
    callLink.href = `tel:${c.phone}`;
    callLink.innerHTML = `<i class="ti ti-phone" aria-hidden="true"></i> ${t("emergency.call")}`;
    actions.appendChild(callLink);
  }
  if (c.whatsappUrl) {
    const waLink = document.createElement("a");
    waLink.className = "emergency-contact-item__call emergency-contact-item__whatsapp";
    waLink.href = c.whatsappUrl;
    waLink.target = "_blank";
    waLink.rel = "noopener";
    waLink.innerHTML = `<i class="ti ti-brand-whatsapp" aria-hidden="true"></i> ${t("emergency.message")}`;
    actions.appendChild(waLink);
  }
  if (!c.phone) {
    const unset = document.createElement("span");
    unset.className = "emergency-contact-item__unset";
    unset.textContent = t("emergency.addInProfile");
    actions.appendChild(unset);
  }
  li.appendChild(actions);

  return li;
}

/* ================= AI Assistant (Smriti Assistant) ================= */

let assistantHistory = [];
let assistantHasGreeted = false;

const NAV_TARGET_ACTIONS = {
  dashboard: { label: "Dashboard", icon: "ti-layout-dashboard", run: () => showView("dashboard") },
  recognize_person: {
    label: "Recognize a Person", icon: "ti-face-id",
    run: () => { showView("dashboard"); setTimeout(scrollToRecognizePanel, 200); },
  },
  timetable: {
    label: "Timetable", icon: "ti-clock",
    run: () => { showView("dashboard"); setTimeout(() => document.getElementById("timetable-panel")?.scrollIntoView({ behavior: "smooth" }), 200); },
  },
  events: {
    label: "Events", icon: "ti-calendar-event",
    run: () => { showView("dashboard"); setTimeout(() => document.getElementById("events-panel")?.scrollIntoView({ behavior: "smooth" }), 200); },
  },
  quiz: { label: "Today's Quiz", icon: "ti-puzzle", run: () => { showView("dashboard"); setTimeout(() => { openQuizModal(); setQuizTab("daily"); }, 150); } },
  games: { label: "Today's Game", icon: "ti-device-gamepad-2", run: () => { showView("dashboard"); setTimeout(() => { openQuizModal(); setQuizTab("weekly"); }, 150); } },
  history: { label: "History", icon: "ti-calendar-stats", run: () => { showView("dashboard"); setTimeout(() => { openQuizModal(); showQuizHistoryView(); }, 150); } },
  profile: { label: "Profile", icon: "ti-user", run: () => showView("profile") },
  location: {
    label: "Live Location", icon: "ti-map-pin",
    run: () => { showView("dashboard"); setTimeout(() => document.getElementById("live-map")?.scrollIntoView({ behavior: "smooth" }), 200); },
  },
};

function openAssistantModal() {
  document.getElementById("assistant-modal").classList.add("is-open");
  if (!assistantHasGreeted) {
    renderAssistantMessage("assistant", t("assistant.greeting"));
    assistantHasGreeted = true;
  }
  document.getElementById("assistant-input").focus();
}
function closeAssistantModal() {
  document.getElementById("assistant-modal").classList.remove("is-open");
}
document.getElementById("assistant-fab").addEventListener("click", openAssistantModal);
document.getElementById("assistant-modal-close").addEventListener("click", closeAssistantModal);
document.getElementById("assistant-modal").addEventListener("click", (e) => {
  if (e.target.id === "assistant-modal") closeAssistantModal();
});

function renderAssistantMessage(role, text, navTargets) {
  const list = document.getElementById("assistant-messages");
  const bubble = document.createElement("div");
  bubble.className = `assistant-msg is-${role === "user" ? "user" : (role === "error" ? "error" : "assistant")}`;
  bubble.textContent = text;
  list.appendChild(bubble);

  if (navTargets && navTargets.length) {
    const chipRow = document.createElement("div");
    chipRow.className = "assistant-nav-chips";
    navTargets.forEach((key) => {
      const action = NAV_TARGET_ACTIONS[key];
      if (!action) return; // unknown/invalid target -- silently skip rather than show a broken chip
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "assistant-nav-chip";
      chip.innerHTML = `<i class="ti ${action.icon}" aria-hidden="true"></i> ${action.label}`;
      chip.addEventListener("click", () => {
        closeAssistantModal();
        action.run();
      });
      chipRow.appendChild(chip);
    });
    if (chipRow.children.length) list.appendChild(chipRow);
  }

  list.scrollTop = list.scrollHeight;
  return bubble;
}

function showAssistantTyping() {
  const list = document.getElementById("assistant-messages");
  const bubble = document.createElement("div");
  bubble.className = "assistant-msg is-typing";
  bubble.id = "assistant-typing-indicator";
  bubble.textContent = t("assistant.thinking");
  list.appendChild(bubble);
  list.scrollTop = list.scrollHeight;
}
function hideAssistantTyping() {
  const el = document.getElementById("assistant-typing-indicator");
  if (el) el.remove();
}

document.getElementById("assistant-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("assistant-input");
  const message = input.value.trim();
  if (!message) return;

  const sendBtn = document.getElementById("assistant-send-btn");
  input.value = "";
  input.disabled = true;
  sendBtn.disabled = true;

  renderAssistantMessage("user", message);
  showAssistantTyping();

  try {
    const res = await fetch("/api/assistant/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history: assistantHistory }),
    });
    const data = await res.json();
    hideAssistantTyping();

    if (!data.ok) {
      renderAssistantMessage("error", data.error || "Something went wrong. Please try again.");
    } else {
      renderAssistantMessage("assistant", data.reply, data.nav_targets);
      assistantHistory.push({ role: "user", text: message });
      assistantHistory.push({ role: "model", text: data.reply });
    }
  } catch (err) {
    hideAssistantTyping();
    renderAssistantMessage("error", "Could not reach the server. Please check your connection.");
  } finally {
    input.disabled = false;
    sendBtn.disabled = false;
    input.focus();
  }
});

/* -- Voice input, via the browser's built-in Web Speech API (free, no
   backend involved). Support varies by browser -- solid in Chrome/Edge,
   weak or absent in Firefox and some Safari versions -- so the mic button
   only appears at all if the browser actually exposes the API. Language is
   set to English (India) by default, which in practice also picks up a lot
   of Hinglish speech reasonably, though recognition accuracy for mixed
   Hindi-English speech varies by browser/OS and isn't guaranteed. -- */
const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let assistantRecognizer = null;
let assistantIsListening = false;

function setAssistantListeningState(isListening) {
  assistantIsListening = isListening;
  document.getElementById("assistant-mic-btn").classList.toggle("is-listening", isListening);
  document.getElementById("assistant-listening-label").style.display = isListening ? "flex" : "none";
}

if (SpeechRecognitionAPI) {
  const micBtn = document.getElementById("assistant-mic-btn");
  micBtn.style.display = "flex";

  assistantRecognizer = new SpeechRecognitionAPI();
  assistantRecognizer.lang = "en-IN";
  assistantRecognizer.interimResults = false;
  assistantRecognizer.maxAlternatives = 1;

  assistantRecognizer.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("assistant-input").value = transcript;
  };
  assistantRecognizer.onerror = () => setAssistantListeningState(false);
  assistantRecognizer.onend = () => setAssistantListeningState(false);

  micBtn.addEventListener("click", () => {
    if (assistantIsListening) {
      assistantRecognizer.stop();
      return;
    }
    document.getElementById("assistant-input").value = "";
    try {
      assistantRecognizer.start();
      setAssistantListeningState(true);
    } catch (err) {
      setAssistantListeningState(false);
    }
  });
}

/* ================= Image lightbox (Recognize a Person / Find My Things search) ================= */
function openImageLightbox(url, caption) {
  if (!url) return;
  document.getElementById("image-lightbox-img").src = url;
  document.getElementById("image-lightbox-caption").textContent = caption || "";
  document.getElementById("image-lightbox").classList.add("is-open");
}
function closeImageLightbox() {
  document.getElementById("image-lightbox").classList.remove("is-open");
}
document.getElementById("image-lightbox-close").addEventListener("click", closeImageLightbox);
document.getElementById("image-lightbox").addEventListener("click", (e) => {
  if (e.target.id === "image-lightbox") closeImageLightbox();
});

/* ================= "Know About Application" intro guide ================= */
function openIntroModal() {
  document.getElementById("intro-modal").classList.add("is-open");
}
function closeIntroModal() {
  document.getElementById("intro-modal").classList.remove("is-open");
}
document.getElementById("intro-modal-close").addEventListener("click", closeIntroModal);
document.getElementById("intro-done-btn").addEventListener("click", closeIntroModal);
document.getElementById("intro-modal").addEventListener("click", (e) => {
  if (e.target.id === "intro-modal") closeIntroModal();
});

/* ================= Dashboard: placeholder actions ================= */
/* These features aren't wired up yet -- just friendly placeholders for now. */
function comingSoon(label) {
  alert(label + " is coming soon!");
}
document.getElementById("profile-btn").addEventListener("click", () => showView("profile"));
document.getElementById("quiz-topbar-btn").addEventListener("click", openQuizModal);
document.getElementById("intro-btn").addEventListener("click", openIntroModal);
document.getElementById("emergency-btn-top").addEventListener("click", triggerEmergency);
document.getElementById("stat-quiz-card").addEventListener("click", openQuizModal);
document.getElementById("stat-quiz-card").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openQuizModal(); }
});

/* ================= Initial view (must run last -- depends on everything above) ================= */
showView(SERVER_INITIAL_VIEW, { skipHistory: true });
history.replaceState({ view: SERVER_INITIAL_VIEW }, "", VIEW_PATHS[SERVER_INITIAL_VIEW] || window.location.pathname);