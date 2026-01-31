// @ts-check
import { test, expect } from '@playwright/test';

// Pos_Fun_0001
test('convert_a_short_daily_greeting_phrase', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('saadharayen piliganimu.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('සාදරයෙන් පිලිගනිමු.');
});

// Pos_Fun_0002
test('convert_currency_value_with_numeric_suffix', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('Rs. 5000k labunaa.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('Rs. 5000ක් ලැබුණා.');
});

// Pos_Fun_0003
test('convert_mixed_singlish_sentence_with_english_words', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('nimaali office enna late vennee traffic nisaa.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('නිමාලි office එන්න late වෙන්නේ traffic නිසා');
});

// Pos_Fun_0004
test('convert_interrogative_sentence', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('oyaa kavadhdha enna hithan inne?');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔයා කවද්ද එන්න හිතන් ඉන්නේ?');
});

// Pos_Fun_0005
test('convert_future_tense_sentence_with_place_name', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('api iiLaGa sathiyee Kandy yanavaa.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අපි ඊළඟ සතියේ Kandy යනවා');
});

// Pos_Fun_0006
test('negative_form_sentence', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('api heta ennee naehae.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අපි හෙට එන්නේ නැහැ.');
});

// Pos_Fun_0007
test('polite_request_sentence', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('karuNaakaralaa eka poddak balanna');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('කරුණාකරලා එක පොඩ්ඩක් බලන්න.');
});

// Pos_Fun_0008
test('short_emotional_expression', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('eeyi, ooka dhiyan.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඒයි, ඔක දියන්.');
});

// Pos_Fun_009
test('polite_request_with_english_word', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('Samaavenna, mata poddak help ekak dhenna puLuvandha?');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('සමාවෙන්න, මට පොඩ්ඩක් help එකක් දෙන්න පුළුවන්ද?');
});

// Pos_Fun_010
test('instruction_sentence', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('vaeda gaena kathaa karanna epaa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('වැඩ ගැන කතා කරන්න එපා');
});

// Pos_Fun_011
test('date_and_time_format_sentence', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('meeting eka dhesaembar 25 heta 10.30 AM thiyennee.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('meeting එක දෙසැම්බර් 25 හෙට 10.30 AM තියෙන්නේ.');
});

// Pos_Fun_012
test('date_with_currency_request', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('adha 2025/01/20 nisa rs. 500 k dhenna.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අද 2025/01/20 නිසා rs. 500ක් දෙන්න.');
});

// Pos_Fun_013
test('common_daily_expression_tiredness', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mata dhaen iithaama mahansiyi, poddak nidhaganna oonee.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මට දැන් ඉතාම මහන්සියි, පොඩ්ඩක් නිදාගන්න ඕනේ.');
});

// Pos_Fun_014
test('complex_cause-and-effect_sentence', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama ada university giya nisaa mage assignment eka karanna late vunaa, eeth heta wenakota eeka iwara karanna puLuwan veyi kiyala hithanawa.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම අද university ගිය නිසා මගේ assignment එක කරන්න late වුණා, ඒත් හෙට වෙද්දී ඒක ඉවර කරන්න පුළුවන් වෙයි කියලා හිතනවා.');
});

// Pos_Fun_015
test('descriptive_paragraph_tourism', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('lankaavee parisaraya bohoma sundhara nisaa vishaala sanscharaka pirisak lankaavata haemadhaama enavaa. api mee raeta raka ganna oonea nisaa parisaraya pahasuven dhushanaya karanna hodha naehae. eevageema api heta udee 10.00 am venakota colombo gihin meeting ekata join venna hithan inne. oyaalath enavadha kiyala mata vahaama kiyanna.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ලන්කාවේ පරිසරය බොහොම සුන්දර නිසා විශාල සන්ස්චරක පිරිසක් ලන්කාවට හැමදාම එනවා. අපි මේ රැට රක ගන්න ඕනේ නිසා පරිසරය පහසුවෙන් දුශනය කරන්න හොද නැහැ. ඒවගේම අපි හෙට උඩේ 10.00 am වෙනකොට colombo ගිහින් meeting එකට join වෙන්න හිතන් ඉන්නේ. ඔයාලත් එනවද කියල මට වහාම කියන්න.');
});

// Pos_Fun_016
test('short_question___price_check', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('meeka kiyadhdha?');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මේක කියද?');
});

// Pos_Fun_017
test('date_format_&_statement', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('2025/12/25 venidhaa nivaadu..');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('2025/12/25 වෙනිදා නිවාඩු.');
});

// Pos_Fun_018
test('mixed_language_complaint', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('machan adha vaeda hari amarui, ude idan meeting meeting nisaa lunch eka vath kanna vune naehae.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මචං අද වැඩ හරි අමාරුයි, උදේ ඉඳන් meeting නිසා lunch එක වත් කන්න වුණේ නැහැ.');
});

// Pos_Fun_019
test('currency_symbols_&_formatting', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('price eka $500 (Rs. 150,000) vagee veevi');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('price එක $500 (Rs. 150,000) වගේ වේවි');
});

// Pos_Fun_020
test('complex_tech_paragraph', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('Haayi machan, iiyee Zoom meeting ekee recording eka saha documentation tika Google Drive ekata upload karaala thiyennee. karunaakaralaa PDF file eka balalaa Excel sheets vala thiyena data tika verify karanna. Monava hari bugs thiyenavaanam mata Email ekak ho WhatsApp message ekak dhaanako. Evageema adha raeeta 8 PM valata Teams meeting ekak thiyenavaa UI design eka gaena discuss karanna. Call ekata kalin App Store ho Play Store eken app ekee latest version eka install karaganna mathaka aethuva. Api project eka Friday venakota karamu.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('හායි මචං, ඊයේ Zoom meeting එකේ recording එක සහ documentation ටික Google Drive එකට upload කරලා තියෙන්නේ. කරුණාකරලා PDF file එක බලලා Excel sheets වල තියෙන data ටික verify කරන්න. මොනවා හරි bugs තියෙනවානම් මට Email එකක් හෝ WhatsApp message එකක් දානකෝ. ඒවගේම අද රෑට 8 PM වලට Teams meeting එකක් තියෙනවා UI design එක ගැන discuss කරන්න. Call එකට කලින් App Store හෝ Play Store එකෙන් app එකේ latest version එක install කරගන්න මතක ඇතුව. අපි project එක Friday වෙනකොට කරමු.	[Matched O');
});

// Pos_Fun_021
test('slang_exclamation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('ela machan, supiri!!');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('එළ මචං, සුපිරි!!');
});

// Pos_Fun_022
test('help_query', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mata poddak udhavvak karanna puluvandha?');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මට පොඩ්ඩක් උදව්වක් කරන්න පුලුවන්ද?');
});

// Pos_Fun_023
test('conditional_request', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('puLuvannam mata eeka evanna.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('පුළුවන්නම් මට ඒක එවන්න.');
});

// Pos_Fun_024
test('mixed_language_complaint_1', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('machan adha vaeda hari amaruyi, udhe idhan meeting nisaa lunch eka vath kanna vunee naehae.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මචං අද වැඩ හරි අමාරුයි, උදේ ඉඳන් meeting නිසා lunch එක වත් කන්න වුණේ නැහැ.');
});

// Pos_Neg_025
test('missing_spaces_segmentation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mamapaadamkarannayanavaa.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මමපාඩම්කරන්නයනවා');
});

// Pos_Neg_026
test('vowel_omission_sms_style', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mma gdhara ynwa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ම්ම ග්ධර ය්න්ව');
});

// Pos_Neg_027
test('joined_words___grammar_error', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama yaluwagegedhara gihin yanava.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('mama yaluwagegedhara gihin yanava.');
});

// Pos_Neg_028
test('sinhala_output_updates_automatically_in_real-time', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('ada $ supiri ### elakiri !!!');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('අද $ supiri ### එළකිරි !!!');
});

// Pos_Fun_029
test('excessive_whitespace', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('o  ya  ta kohomadha');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔ  යා  ට කොහොමද');
});

// Pos_Neg_029
test('alphanumeric_slang_numeronyms', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mke gr8 vdk machan');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ම්කෙ gr8 ව්ඩ්ක් මචං');
});

// Pos_Neg_030
test('url___web_address_handling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('thava visthara www.srilanka.lk vethin ganna.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('තව විස්තර www.srilanka.lk වෙතින් ගන්න.');
});

// Pos_Neg_031
test('control_test_valid_input3', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama gedhara yanawa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම ගෙදර යනwඅ');
});

// Pos_Neg_032
test('scientific_term___fallback', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('photosynthesis kriyaawaliya');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('photosynthesis ක්‍රියාවලිය');
});

// Pos_Neg_033
test('email_address_handling', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('vistara tika info@domain.com ta mail karanna.');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('විස්තර ටික info@domain.com ට mail කරන්න.');
});

// Pos_Neh_034
test('missing_delimiter_joined_words', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('obaennata kaemathi dha?');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('ඔබඑන්නට කැමති ද?');
});

// Pos_Neg_035
test('run-on_sentence_no_punctuation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('mama campus gihin igena gena hoda rassawak karalaa hodin jiwath wenawa');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('මම campus ගිහින් ඉගෙන ගෙන හොඳ රස්සාවක් කරලා හොඳින් ජීවත් වෙනවා');
});

// Pos_Neg_036
test('greeting___exclamation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('suba udhaeesanak!');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('සුබ උදෑසනක්!');
});

// Pos_Neg_037
test('greeting___exclamation', async ({ page }) => {
    // Navigate to Swift Translator
    await page.goto('https://www.swifttranslator.com/');
    // Locate the Singlish input textarea
    const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]'
    );
    // Enter Singlish text
    await input.fill('suba udhaeesanak!');
    await input.press('Space');
    // Locate the translated output area
    const output = page.locator('div.bg-slate-50').first();
    // Expect the Sinhala translation to be displayed
    await expect(output).toContainText('සුබ උදෑසනක්!');
});