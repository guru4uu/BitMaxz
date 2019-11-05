var c = require('./config');

// EDIT THESE TEXTS (ONLY THE LINES THAT ARE NOT INDENTED)
// TRY NOT TO GET RID OF 's or ,s 
// DO NOT CHANGE THE EMOJIS FOR MENU OPTIONS UNLESS
// YOU EDIT THE CODE IN index.js AS WELL
// REMEMBER TO PROPERLY ESCAPE SPECIAL CHARACTERS

(function () {
    var text_provider = function(){
        var self = this;

this.initial_welcome_msg = `🥂Welcome to ${c.BOTNAME} \n

${c.BOTNAME} is an interactive bot that provides you 1% passive income daily from your deposit - every 24 hours

🔎A unique opportunity to profit


🤖 Bot: Bitcoin/BTC
💰 Profit plan: 1% daily I LIFETIME
⏱ Payments: every 24 hours
💶 Min. Deposit: 0.0001 BTC
♻️ Reinvestment: 0.0001 BTC
💸 Min. Withdraw: 0.0001 BTC

🗣Referral Bonus
🥇 3%
🥈 2%
🥉 1%

📛Don't trust anyone who PM you first 
📛Only send your coins to the adress that the bot provides you


Milestones
0.5 BTC
1.0 BTC
5.0 BTC
10  BTC
20  BTC

The BitProfitClub project consists of four people, a programmer, two chat supporters and a trader. Resident in various areas of the world, the script for the bot is hosted on a server at San Francisco. 

Daily profits are generated in addition to trading through various unofficial partner projects


👥 Join our Community Chat 
https://t.me/Community${c.BOTNAME}Bot_ENG

🛎 Join our News Channel
https://t.me/${c.BOTNAME}BotNews

🏛 Payment Proof
https://t.me/${c.BOTNAME}PaymentProof

Email us
${c.BOTNAME}bot@gmail.com
`;
this.big_dict = {
'english': {
'language_select_complete': 'Your language is now set to english; you can change this any time in the options menu',
'welcome_msg': 'Welcome back',
'error_msg': 'Whoops, something went wrong! Our developers have been alerted.',

'main_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '💵 Deposit'}, {text: '💳 Withdraw'}], 
[{text: '⚖️ Balance'}, {text: '♻️ Reinvest'}],
[{text: '👥 My Team'}, {text: '⚙️ Options'}],
[{text: '⁉️ FAQ'},{text: '✉ Support'}]
]
})
},

'main_menu_admin': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '💵 Deposit'}, {text: '💳 Withdraw'}], 
[{text: '⚖️ Balance'}, {text: '♻️ Reinvest'}],
[{text: '👥 My Team'}, {text: '⚙️ Options'}],
[{text: '⁉️ FAQ'},{text: '✉ Support'}],
[{text: '🍀 Admin Menu'}]
]
})
},

'admin_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🍞 Check Wallet Balance'}], 
[{text: '🍇 Check Pending Deposits'}],
[{text: '🍉 Pending Withdrawal Approvals'}],
[{text: '💦 Give Bonus'}],
[{text: '🏠 Return to Main Menu'}]
]
})
},

'options_text': 'Options:',
'options_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🔁 Edit Withdraw Address'}],
[{text: '🎌 Edit Language'}], 
[{text: '🏠 Return to Main Menu'}]
],
})
},
'return_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🏠 Return to Main Menu'}]
]
})
},

'deposit_text': 'Your deposit address is',
'deposit_initial_text': 'Minimum deposit is 0.0001 btc. Please send your coins to the following address',
'deposit_text_rest': 'Your investment plan will be started after 3 network confirmations.',
'deposit_confirmed_text': 'We received your deposit of ',
'deposit_confirmed_text_rest': ' btc, you will start earning interest after 24 hours.',

'bonus_text': 'You\'ve earned a bonus of ',
'bonus_text_rest': ' btc\nbe sure to thank @',

'withdrawal_addr_text': 'Reply to this message with your btc address to set your withdrawal address',
'withdrawal_addr_error_text': 'Sorry, that\'s not a valid btc address\n Try again, or click /back to cancel',
'withdrawal_addr_success_text': 'Thanks, your withdrawal address has been set successfully',

'withdrawal_error_text': 'Your current balance is not enough to withdraw. The minimum needed is 0.0001 btc\nYou have: ',
'withdrawal_error_addr_text': 'You need to set an address before you can withdraw',

'withdrawal_text': 'Your current balance available to withdraw is ',
'withdrawal_text_addr_check': 'If the above address is correct',
'withdrawal_text_rest': '\nReply to this message with the amount you wish to withdraw or type "all"\n or click /back to cancel',

'withdrawal_err_text': 'You don\'t have enough funds! Try again, or go /back',
'withdrawal_succ_text': 'Your request to withdraw ',
'withdrawal_succ_text_rest': ' btc is processing',

'withdrawal_approved_text': '💰 Your withdrawal request for ',
'withdrawal_approved_text_rest': ' btc was successful 💰\n',

'reinvest_text': 'Your current balance available to reinvest is ',
'reinvest_text_rest': 'btc\nReply to this message with the amount you wish to reinvest or type "all"\n or click /back to cancel',
'reinvest_error_text': 'Your current balance is not enough to reinvest. The minimum needed is 0.0001 btc\nYou have: ',
'reinvest_succ_text': 'Your request to reinvest ',
'reinvest_succ_text_rest': 'btc was successful',
'reinvest_err_text': 'You don\'t have enough funds! Try again, or go /back',

'referral_msg_text': `Your friend has invited you to join ${c.BOTNAME}, click the link below to get started\n`,

'stats_text_1':       '💰Account Balance: ',
'stats_text_2': ' btc\n🏛Total Invested:  ',
'stats_text_3': ' btc\n💸Total Profit:    ',
'stats_text_4': ' btc',

'referral_stats_text_1': 'Total referrals: ',
'referral_stats_text_2': '\nActive referrals: ',

'faq_text': `Frequently Asked Questions:
1. What is ${c.BOTNAME}?
BitProfitClub helps you build a passive income. You will receive 1% daily - you will be credited  every 24 hours. Our minimum deposit is 0.0001 btc.

2. How does ${c.BOTNAME} work?
Your money will be invested into many different projects, that creats our profits: trading & cloud mining
We are looking anytime for more official partners, spread your ideas.

3. Can I deposit more than once?
Yes, you can deposit more than once.

4. How can I withdraw my profit?
Kindly click on the Withdraw button from the main menu to make your withdrawal. Minimum withdrawal is 0.0001 btc.

5. How can I earn more money?
You can earn more money by referring your family and friends. Each referral will earn you a commission in three levels 3% 2% 1%.

6. How can I participate in bonuses?
If you have an active investment of 0.5 btc or more you will automatically be enrolled in our raffle. Winners are chosen every 30 days and will get up to a 0.5 btc bonus.

7. What if I experience problems?
Contact someone listed under the support button`,

'faq_menu': {
parse_mode: 'Markdown',
reply_markup: JSON.stringify({
keyboard: [
[{text: '✉ Support'}],
[{text: '🏠 Return to Main Menu'}]
]
})
},

'support_text': `Be always up to date! News Channel:
https://t.me/${c.BOTNAME}BotNews

If you have a problem, kindly join our group chat:
https://t.me/Community${c.BOTNAME}Bot_ENG

Or email us at:
${c.BOTNAME}bot@gmail.com`,
'referral_text': `Earn a referral bonus for every user that you recruit! Here's how it works:

As our thanks to you, you will earn 3% of their initial deposit
Plus, any user that they refer, will earn you 2% of their initial deposit
And any user referred by a user you refer, will earn you 1% of their initial deposit

👇👇👇👇👇👇👇👇👇`,
'referral_prelauncher_text': `Earn a Referral Bonus for every user that you recruit! Here's how it works:

As our thanks to you, you will earn 3% of their initial deposit
Plus, any user that they refer, will earn you 2% of their initial deposit
And any user referred by a user you refer, will earn you 1% of their initial deposit

👇👇👇👇👇👇👇👇👇`,


},
'french': {

'language_select_complete': 'Votre langue est maintenant configurée en Français, vous pouvez la modifier n\'importe quand dans le menu Options',
'welcome_msg': 'Nous saluons le retour',
'error_msg': 'Whoops, quelque chose ne s\'est pas déroulé, nos développeurs ont été alerté et répareront ce qui se passera!',

'main_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '💵 Dépôt'}, {text: '💳 Retirer'}], 
[{text: '⚖️ Crédit'}, {text: '♻️ Reinvest'}],
[{text: '👥 Mon équipe'}, {text: '⚙️ Les options'}],
[{text: '⁉️ FAQ'},{text: '✉ soutien'}] 
]
})},

'options_text': 'Options:',
'options_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🔁 Modifier retirer l\'adresse'}],
[{text: '🎌 Modifier la langue'}], 
[{text: '🏠 Retour au menu principal'}]
],
})
},
'return_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🏠 Retour au menu principal'}]
]
})
},

'deposit_text': 'Votre adresse de dépôt est',
'deposit_initial_text': 'Le dépôt minimum est de 0.0001 btc, veuillez envoyer vos pièces à l\'adresse suivante',
'deposit_confirmed_text': 'Nous avons reçu votre dépôt de ',
'deposit_confirmed_text_rest': ' btc, vous commencerez à vous intéresser après 24 heures.',

'bonus_text': 'Vous avez gagné un bonus de ',
'bonus_text_rest': ' btc\nAssurez-vous de remercier @',

'withdrawal_addr_text': 'Répondez à ce message avec votre adresse btc pour définir votre adresse de retrait',
'withdrawal_addr_error_text': 'Désolé, ce n\'est pas une adresse btc valide\nRéessayez ou cliquez sur /back',
'withdrawal_addr_success_text': 'Merci, votre adresse de retrait a été réglée avec succès',

'withdrawal_error_text': 'Votre solde actuel n\'est pas suffisant pour vous retirer. Le minimum requis est de 0.0001 btc\nTu as: ',
'withdrawal_error_addr_text': 'Vous devez définir une adresse avant de pouvoir retirer',

'withdrawal_text': 'Votre solde actuel disponible pour le retrait est ',
'withdrawal_text_addr_check': 'Si l\'adresse ci-dessus est correcte',
'withdrawal_text_rest': '\nRépondez à ce message avec le montant que vous souhaitez retirer ou taper "tout"\n ou cliquez sur /back',

'withdrawal_succ_text': 'Votre demande de retrait ',
'withdrawal_succ_text_rest': 'btc est traitement',

'withdrawal_approved_text': '💰 Votre demande de retrait pour',
'withdrawal_approved_text_rest': ' btc était un succès 💰',

'withdrawal_err_text': 'Vous n\'avez pas assez de fonds! Réessayer, ou aller /back',

'referral_msg_text': `Votre ami vous a invité à rejoindre ${c.BOTNAME}, cliquez sur le lien ci-dessous pour commencer\n`,

'stats_text_1':       '💰Solde du compte: ',
'stats_text_2': ' btc\n🏛Total Investissement:  ',
'stats_text_3': ' btc\n💸Total Bénéfice:    ',
'stats_text_4': ' btc',

'referral_stats_text_1': 'Vos références totales: ',
'referral_stats_text_2': '\nRenvois actifs: ',

'faq_text': `Questions fréquemment posées:
1. Quel est ${c.BOTNAME}?
BitProfitClub vous aide à générer un revenu passif. Vous recevrez 1% par jour - vous serez crédité toutes les 24 heures. Notre dépôt minimum est de 0,0001 btc.

2.Comment travaille ${c.BOTNAME}?
Votre argent sera investi dans de nombreux projets différents, qui génèrent nos profits: trading et extraction dans les nuages
Nous recherchons à tout moment plus de partenaires officiels, laissez-nous maintenant si vous en connaissez un! 

3. Puis-je déposer plus d'une fois?
Oui, vous pouvez avoir plus d'un dépôt.

4. Comment puis-je retirer mon bénéfice?
Veuillez cliquer sur le bouton de retrait du menu principal pour effectuer votre retrait. Le retrait minimum est de 0.001 btc.

5. Comment puis-je gagner plus d'argent?
Vous pouvez gagner plus d'argent si vous vous référez à votre famille et à vos amis. Chaque recommandation vous procurera une commission à trois niveaux 3% -2% -1%.

6. Comment puis-je participer aux bonus?
Si vous avez un investissement actif de 0.5 btc ou plus, vous serez automatiquement inscrit au tirage au sort. Les gagnants sont choisis tous les 30 jours et recevront un bonus de 0.5 btc.

7. Et si j'éprouve des problèmes?
Contactez quelqu'un listé sous le bouton Support`,


'faq_menu': {
parse_mode: 'Markdown',
reply_markup: JSON.stringify({
keyboard: [
[{text: '✉ Soutien'}],
[{text: '🏠 Retour au menu principal'}]
]
})
},

'support_text': `Soyez toujours à jour! Ma chaîne d'actualités et d'information Telegram est ici:
https://t.me/${c.BOTNAME}BotNews

si vous avez un problème, veuillez joindre notre groupe chat:
https://t.me/Community${c.BOTNAME}Bot_ENG

Ou Envoyez-nous un courriel à:
${c.BOTNAME}bot@gmail.com`,
'referral_text': `Gagnez un bonus de recommandation pour chaque utilisateur que vous recrutez! Voici comment cela fonctionne:

Comme nous vous remercions, vous gagnerez 3% de leur dépôt initial
De plus, tous les utilisateurs qu'ils renvoient, vous gagnera 2% de leur dépôt initial
Et tout utilisateur référé par un utilisateur que vous renvoyez, vous gagnera 1% de son dépôt initial

👇👇👇👇👇👇👇👇👇`,
'referral_prelauncher_text': `Gagnez un bonus de recommandation pour chaque utilisateur que vous recrutez! Voici comment cela fonctionne:

Comme nous vous remercions, vous gagnerez 3% de leur dépôt initial
De plus, tous les utilisateurs qu'ils renvoient, vous gagnera 2% de leur dépôt initial
Et tout utilisateur référé par un utilisateur que vous renvoyez, vous gagnera 1% de son dépôt initial

👇👇👇👇👇👇👇👇👇`,

},
'german': { 'language_select_complete': 'Ihre Sprache ist jetzt auf Deutsch eingestellt; Falsche Sprache? Kein Problem - einfach zu ändern im Optionsmenü.',
'welcome_msg': 'Wilkommen zurück',
'error_msg': 'Hoppala!  Etwas ist schief gelaufen! Unsere Entwicklerteam wurde benachrichtigt.',

'main_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '💵 Einzahlen'}, {text: '💳 Auszahlen'}], 
[{text: '⚖️ Guthaben'}, {text: '♻️ Reinvest'}],
[{text: '👥 Mein Team'}, {text: '⚙️ Optionen'}],
[{text: '⁉️ FAQ'},{text: '✉ Support'}]
]
})
},

'main_menu_admin': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '💵 Einzahlen'}, {text: '💳 Auszahlen'}], 
[{text: '⚖️ Guthaben'}],
[{text: '👥 Mein Team'}, {text: '⚙️ Optionen'}],
[{text: '⁉️ FAQ'},{text: '✉ Support'}],
[{text: '🍀 Admin Menü'}]
]
})
},

'admin_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🍞 Kontostand abrufen'}], 
[{text: '🍇 Unerledigt Anzahlungen'}],
[{text: '🍉 Anhängige Rücknahmegenehmigungen'}],
[{text: '🏠 Zuruck zum HauptMenü'}]
]
})
},

'options_text': 'Optionen:',
'options_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🔁 Wallet Adresse ändern'}],
[{text: '🎌 Sprache ändern'}], 
[{text: '🏠 Zurück zum Hauptmenü'}]
],
})
},
'return_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🏠 Zurück zum Hauptmenü'}]
]
})
},

'deposit_text': 'Ihre Einzahlungsadresse lautet',
'deposit_initial_text': 'Mindesteinzahlung is 0.0001 BTC; bitte senden Sie Ihre BTC an die folgende Adresse',
'deposit_text_rest': 'Nach 3 Netzwerkbestätigungen startet dein Investmentplan. ',
'deposit_confirmed_text': 'Wir haben deine Einzahlung erhalten ',
'deposit_confirmed_text_rest': ' btc, Nach 24 Stunden startet ihr Investment mit 1%',

'bonus_text': 'Sie haben einen Bonus verdient  ',
'bonus_text_rest': ' btc\n Sei danke zu danken @',

'withdrawal_addr_text': 'Adresse',
'withdrawal_addr_error_text': 'Entschuldigung, das ist keine gültige Adresse. Versuchen sie es erneut oder klicken sie /back um abzubrechen',
'withdrawal_addr_success_text': 'Danke, deine Wallet Adresse wurde erfolgreich gespeichert',

'withdrawal_error_text': 'Zu wenig Guthaben ! Sie können nicht abheben. Das erforderliche Minimum beläuft sich auf 0.0001 btc.\nSie haben: ',
'withdrawal_error_addr_text': 'Sie müssen eine gültige Adresse einfügen bevor Sie abheben können',

'withdrawal_text': 'Der Mögliche abzuhebende Betrag beläuft sich auf ',
'withdrawal_text_addr_check': 'Wenn die obige Adresse korrekt ist ',
'withdrawal_text_rest': '\nBeantworten Sie diese Nachricht mit dem Betrag den Sie abheben möchten, oder geben Sie "alle" ein\noder klicken Sie auf /back um abzubrechen',

'withdrawal_succ_text': 'Ihr Antrag zum Abheben wurde an den Admin zur Genehmigung gesendet.  Danke für dein Vertrauen!',
'withdrawal_err_text': 'Ihnen stehen nicht genügend Coins zur Verfügung!  Versuchen Sie es noch einmal, oder gehen Sie zurück',

'withdrawal_approved_text': '💰 Ihre Anfrage für ',
'withdrawal_approved_text_rest': ' btc war erfolgreich 💰\n',

'referral_msg_text': `\n `,

'stats_text_1':       '💰Kontostand: ',
'stats_text_2': ' btc\n🏛Insgesamt investiert:  ',
'stats_text_3': ' btc\n💸Gesamtgewinn:    ',
'stats_text_4': ' btc',

'referral_stats_text_1': 'Ihre Gesamtverweise: ',
'referral_stats_text_2': '\nAktive Verweise: ',

'faq_text': `Häufig gestellte Fragen:
1. Was ist ${c.BOTNAME}?
BitProfitClub hilft Ihnen ein passives Einkommen aufzubauen. Täglich erhalten Sie 1% - dieser Gewinn wird Ihnen alle 24 Stunden gutgeschrieben. Unsere Mindesteinzahlung liegt bei 0.0001 btc.

2. Wie funktioniert ${c.BOTNAME}?
Ihr Geld wird in verschiedene Projekte investiert, die unsere Gewinne erzielen: Handel und Cloud-Mining
Wir suchen jederzeit nach weiteren Partnern, bei Interesse bitte an den Support wenden.

3. Darf ich mehr als einmal investieren?
Ja, sie dürfen so oft investieren wie Sie wollen.

4. Wie kann ich meinen Gewinn auszahlen? 
Bitte klicken sie auf den Auszahlen-Button im Hauptmenü, um eine Auszahlung zu tätigen.Mindestens 0.0001 btc.

5. Wie kann ich mehr Geld verdienen? 
Sie können mehr Geld verdienen, indem Sie Ihre Familie und Freunde einladen. Durch jede angenommen Einladung und Investition  wird 3% 2% 1% verdient.

6. Wie kann ich an Boni teilnehmen? 
Wenn Sie eine aktive Investition von 0.5 btc oder mehr haben, werden Sie automatisch bei unserer Verlosung eingeschrieben. Die Gewinner werden alle 30 Tage gewählt und werden bis zu 0.5 btc erhalten.

7. Was mache ich wenn ich Probleme habe? 
Kontaktieren Sie uns über den Support Button.`,

'faq_menu': {
parse_mode: 'Markdown',
reply_markup: JSON.stringify({
keyboard: [
[{text: '✉ Support'}],
[{text: '🏠 Zuruck zum Hauptmenü'}]
]
})
},

'support_text': `Bleiben Sie auf dem Laufenden :
https://t.me/${c.BOTNAME}BotNews

Treten Sie unserem Community Chat bei:
https://t.me/Community${c.BOTNAME}Bot_ENG

Schreiben Sie uns unter:
${c.BOTNAME}bot@gmail.com`,
'referral_text': `Verdienen Sie einen Empfehlungsbonus für jeden Investor, den Sie rekrutieren! So geht's :

Sie verdienen 3% von jeder Investition, die Partner, die Sie direkt eingeladen haben, machen.
Plus, jeder weitere Benutzer, der von Ihrer Erstlinie eingetragen wird, erhalten Sie 2%.
Und von jedem Benutzer, der in Dritter Ebene eingetragen wird, erhalten Sie 1%

👇👇👇👇👇👇👇👇👇.`,
'referral_prelauncher_text': `Verdienen Sie einen Empfehlungsbonus für jeden Benutzer, den Sie rekrutieren! So funktioniert es:

Sie profitieren (3%) von jeder Investition, die Partner, die Sie direkt eingeladen haben, tätigen.
Plus von  jedem weiteren Investor, der von deiner Erstlinie eingetragen wurde, erhältst du 2%.
Und von jedem Partner, der in Dritter Ebene eingetragen wird, erhältst du 1%.

👇👇👇👇👇👇👇👇👇 `,

},
'russian': {

'language_select_complete': 'Ваш язык установлен на Русский, вы можете изменить его в любое время в меню «Параметры»',
'welcome_msg': 'Добро Пожаловать',

'main_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '💵 Депонировать'}, {text: '💳 Изымать'}], 
[{text: '⚖️ Статистика'}, {text: '♻️ Reinvest'}],
[{text: '👥 Моя команда'}, {text: '⚙️ Параметры'}],
[{text: '⁉️ FAQ'},{text: '✉ Помощь'}]
]
})
},


'options_text': 'Параметры:',
'options_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🔁 Изменить Адрес Вывода'}],
[{text: '🎌 Изменить Язык'}], 
[{text: '🏠 Вернуться в Главное Меню'}]
],
})
},
'return_menu': {
reply_markup: JSON.stringify({
keyboard: [
[{text: '🏠 Вернуться в Главное Меню'}]
]
})
},

'deposit_text': 'Ваш депозитный адрес',
'deposit_initial_text': 'Минимальный депозит 0.0001 btc, пожалуйста отправьте ваши монеты по следующему адресу',
'deposit_confirmed_text': 'Мы получили ваш депозит в размере ',
'deposit_confirmed_text_rest': ' btc, вы начнете зарабатывать проценты через 24 часа.',

'bonus_text': 'Вы получили бонус ',
'bonus_text_rest': ' btc\nне забудьте поблагодарить @',

'withdrawal_addr_text': 'Ответьте на это сообщение с вашим адресом, чтобы установить адрес выхода',
'withdrawal_addr_error_text': 'Извините, это не действительный адрес\n Попробуйте еще раз или нажмите /back  чтобы отменить',
'withdrawal_addr_success_text': 'Спасибо, ваш адрес отзыва успешно установлен',

'withdrawal_error_text': 'Ваш текущий баланс слишком мал, чтобы извлекать. Необходимый минимум 0.0001 btc \n Вы имеете: ',
'withdrawal_error_addr_text': 'Вам нужно установить адрес, прежде чем вы сможете извлекать',

'withdrawal_text': 'Ваш текущий баланс, доступный для снятия средств ',
'withdrawal_text_addr_check': 'Если вышеуказанный адрес верен',
'withdrawal_text_rest': '\nОтветьте на это сообщение с суммой, которую вы хотите снять или введите "all"\n  или нажмите /back  чтобы отменить',

'withdrawal_err_text': 'У тебя недостаточно средств! Повторите попытку или /back',
'withdrawal_succ_text': 'Ваш запрос отозвать ',
'withdrawal_succ_text_rest': ' btc идет полным ходом',

'withdrawal_approved_text': '💰 Ваш запрос на вывод средств на ',
'withdrawal_approved_text_rest': ' btc был успешным 💰\n',

'referral_msg_text': `Ваш друг пригласил вас присоединиться к боту ${c.BOTNAME}, для того чтобы начать, нажмите на ссылку ниже\n`,

'stats_text_1':       '💰Баланс:   ',
'stats_text_2': ' btc\n🏛Вложение: ',
'stats_text_3': ' btc\n💸Доход:    ',
'stats_text_4': ' btc',

'referral_stats_text_1': '👥Количество рефералов: ',
'referral_stats_text_2': '\n🗣Количество активных рефералов: ',

'faq_text': `Часто Задаваемые Вопросы:
1. Что такое ${c.BOTNAME}?
BitProfitClub помогает вам построить пассивный доход. Вы будете получать 1% в день - вы будете перечисляться каждые 24 часа. Наш минимальный депозит составляет 0,0001 btc.

2. Как работает ${c.BOTNAME}?
Ваши деньги будут инвестированы во множество разных проектов, что создаст нашу прибыль: торговля и облачная разработка Мы ищем в любое время для более официальных партнеров, давайте теперь, если вы их знаете!

3. Могу ли я внести депозит больше одного раза?
Да, не в чем себе не отказывайте 

4. Как я могу достать свою прибыль?
Нажмите на кнопку «Изымать» в главном меню, чтобы сделать вывод

5. Как я могу заработать больше денег?
Вы можете заработать больше денег, если вы обратитесь к своей семье и друзьям. Каждый реферал заработает комиссию в трех уровнях 3% -2% 1%.

6. Как я могу участвовать в бонусах?
Если у вас есть активные инвестиции в размере 0,5 btc и более, вы автоматически будете зачислены в нашу лотерею. Победители выбираются каждые 30 дня и получат бонус в 0,5 btc.

7. Что делать, если у меня есть проблемы?
Нажмите кнопку «Помощь»`,

'faq_menu': {
parse_mode: 'Markdown',
reply_markup: JSON.stringify({
keyboard: [
[{text: '✉ Помощь'}],
[{text: '🏠 Вернуться в Главное Меню'}]
]
})
},

'support_text': `Будьте всегда в курсе! Мой новостной и информационный канал находится здесь:
https://t.me/${c.BOTNAME}BotNews

Если у вас есть проблемы, присоединяйтесь к нашему групповому чату:
https://t.me/Community${c.BOTNAME}Bot_ENG

Или напишите нам по электронной почте:
${c.BOTNAME}bot@gmail.com`,
'referral_text': `Зарабатывайте реферальный бонус для каждого пользователя, которого вы набираете! вот как это работает:

Поскольку мы благодарим вас, вы заработаете 3% от первоначального депозита
Кроме того, любой пользователь, которого они называют, заработает вам 2% от первоначального депозита
И любой пользователь, на который ссылается пользователь, которого вы называете, заработает вам 1% от первоначального депозита

👇👇👇👇👇👇👇👇👇`,
'referral_prelauncher_text': `Зарабатывайте реферальный бонус для каждого пользователя, которого вы набираете! вот как это работает:

Поскольку мы благодарим вас, вы заработаете 3% от первоначального депозита
Кроме того, любой пользователь, которого они называют, заработает вам 2% от первоначального депозита
И любой пользователь, на который ссылается пользователь, которого вы называете, заработает вам 1% от первоначального депозита

👇👇👇👇👇👇👇👇👇`,

}
};

        this.get_text = function(lang, key) {
            if (!(lang in self.big_dict)){
                lang = 'english';
            } else if (!(key in self.big_dict[lang])){
                lang = 'english';
            }
            if (key in self.big_dict[lang]){
                return self.big_dict[lang][key];
            } else {
                if (key.indexOf('menu') >= 0){
                    return self.big_dict[lang]['main_menu']
                } else {
                    return 'oops';
                }
            }
        }
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports = {msg_dict : text_provider};
    }
}());
