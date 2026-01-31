import { test, expect } from '@playwright/test';

const scenarios = [
    // Renumbered to start from 0004 to follow assignment rules
    { id: 'Pos_Fun_0001', input: 'saadharayen piLiganimu.' },
    { id: 'Pos_Fun_0002', input: 'Rs. 5000k labunaa.' },
    { id: 'Pos_Fun_0003', input: 'nimaali office enna late vennee traffic nisaa.' },
    { id: 'Pos_Fun_0004', input: 'oyaa kavadhdha enna hithan inne?' },
    { id: 'Pos_Fun_0005', input: 'api iiLaGa sathiyee Kandy yanavaa.' },
    { id: 'Pos_Fun_0006', input: 'api heta ennee naehae.' },
    { id: 'Pos_Fun_0007', input: 'suba udhaeesanak!' },
    { id: 'Pos_Fun_0008', input: 'karuNaakaralaa eka poddak balanna.' },
    { id: 'Pos_Fun_0009', input: 'eeyi, ooka dhiyan.' },
    { id: 'Pos_Fun_0010', input: 'Samaavenna, mata poddak help ekak dhenna puLuvandha?' },
    { id: 'Pos_Fun_0011', input: 'vaeda gaena kathaa karanna epaa' },
    { id: 'Pos_Fun_0012', input: 'meeting eka dhesaembar 25 heta 10.30 AM thiyennee.' },
    { id: 'Pos_Fun_0013', input: 'Haayi machan, iiyee Zoom meeting ekee recording eka saha documentation tika Google Drive ekata upload karaala thiyennee. karunaakaralaa PDF file eka balalaa Excel sheets vala thiyena data tika verify karanna. Monava hari bugs thiyenavaanam mata Email ekak ho WhatsApp message ekak dhaanako. Evageema adha raeeta 8 PM valata Teams meeting ekak thiyenavaa UI design eka gaena discuss karanna. Call ekata kalin App Store ho Play Store eken app ekee latest version eka install karaganna mathaka aethuva. Api project eka Friday venakota karamu. ' },
    { id: 'Pos_Fun_0014', input: 'adha 2025/01/20 nisa rs. 500 k dhenna.' },
    { id: 'Pos_Fun_0015', input: 'mata dhaen iithaama mahansiyi, poddak nidhaganna oonee.' },
    { id: 'Pos_Fun_0016', input: 'mama ada university giya nisaa mage assignment eka karanna late vunaa, eeth heta wenakota eeka iwara karanna puLuwan veyi kiyala hithanawa.' },
    { id: 'Pos_Fun_0017', input: 'lankaavee parisaraya bohoma sundhara nisaa vishaala sanscharaka pirisak lankaavata haemadhaama enavaa. api mee raeta raka ganna oonea nisaa parisaraya pahasuven dhushanaya karanna hodha naehae. eevageema api heta udee 10.00 am venakota colombo gihin meeting ekata join venna hithan inne. oyaalath enavadha kiyala mata vahaama kiyanna.' },
    { id: 'Pos_Fun_0018', input: 'meeka kiyadhdha?' },
    { id: 'Pos_Fun_0019', input: '2025/12/25 venidhaa nivaadu.' },
    { id: 'Pos_Fun_0020', input: 'ela machan, supiri!! ' },
    { id: 'Pos_Fun_0021', input: 'price eka $500 (Rs. 150,000) vagee veevi' },
    { id: 'Pos_Fun_0022', input: 'machan adha vaeda hari amarui, ude idan meeting meeting nisaa lunch eka vath kanna vune naehae.' },
    { id: 'Pos_Fun_0023', input: 'mata poddak udhavvak karanna puluwandha?' },
    { id: 'Pos_Fun_0024', input: 'puLuvannam mata eeka evanna.' },

    // Negative cases
    { id: 'Neg_Fun_0001', input: 'mamapaadamkarannayanavaa.' },
    { id: 'Neg_Fun_0002', input: 'mma gdhara ynwa' },
    { id: 'Neg_Fun_0003', input: 'mama yaluwagegedhara gihin yanava.' },
    { id: 'Neg_Fun_0004', input: 'ada $ supiri ### elakiri !!!' },
    { id: 'Neg_Fun_0005', input: 'o  ya  ta kohomadha' },
    { id: 'Neg_Fun_0006', input: 'mke gr8 vdk machan' },
    { id: 'Neg_Fun_0007', input: 'mama gedhara yanawa' },
    { id: 'Neg_Fun_0008', input: 'photosynthesis kriyaawaliya' },
    { id: 'Neg_Fun_0009', input: 'obaennata kaemathi dha?' },
    { id: 'Neg_Fun_0010', input: 'mama campus gihin igena gena hoda rassawak karalaa hodin jiwath wenawa' },
];

test.describe('SwiftTranslator Automation', () => {

    test.setTimeout(180000); // 3 minutes total timeout

    for (const data of scenarios) {
        test(`Test Case ${data.id}`, async ({ page }) => {
            // FIX 1: Use domcontentloaded to avoid waiting for slow ads
            await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

            const inputField = page.locator('textarea').first();
            await inputField.waitFor({ state: 'visible' });
            
            // FIX 2: Type the input gradually to trigger Sinhala conversion
            await inputField.type(data.input, { delay: 15 });

            // Wait for conversion
            await page.waitForTimeout(4000); 
            
            const outputField = page.locator('textarea').last();
            const actualOutput = await outputField.inputValue();

            console.log(`\n-----------------------------------`);
            console.log(`TC ID: ${data.id}`);
            console.log(`RESULT: ${actualOutput}`);
            console.log(`-----------------------------------`);

            if (data.id.startsWith('Neg')) {
                expect(actualOutput).toBe('');
            } else {
                expect(actualOutput.length).toBeGreaterThan(0);
            }
        });
    }

    // FIX 3: Renamed to Pos_UI_0002 to avoid sample overlap
    test('Pos_UI_0001: Output clears when input is deleted', async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
        const inputField = page.locator('textarea').first();
        const outputField = page.locator('textarea').last();
        
        await inputField.fill('Testing Update');
        await page.waitForTimeout(2000);
        await inputField.fill('');
        await page.waitForTimeout(2000);
        
        const output = await outputField.inputValue();
        expect(output).toBe('');
    });
});