import {URLSearchParams} from "url";

(<any>global).fetch = require("node-fetch");
(<any>global).URLSearchParams = URLSearchParams;

(async () => {

  let cookie = 'PHPSESSID=spudvadm4d7ss68j09cj5ig2b1';
  const affraidId = '9235';
  const productId = '303420034';
  const phone2 = '926';
  const phone1 = '7296597';
  const openhourFrom = '11:00';
  const openhourTo = '23:59';

  const req = await fetch("https://belgorod.delivery-club.ru", {headers:{ cookie } });
  const text = await req.text();
  const regExp = new RegExp("meta name=\"csrf-token\" content=\"(.*)\"");
  const [, token] = regExp.exec(text);
  console.log('token: ', token);

  const paramsCartEmpty = new URLSearchParams();
  paramsCartEmpty.append('empty_cart', 'true');
  paramsCartEmpty.append('s_id', affraidId);
  const cardEmpry = await fetch("https://belgorod.delivery-club.ru/ajax/cart/", {headers: { cookie, 'x-csrf-token': token},body: paramsCartEmpty, method:"POST", });
  console.log('empty: ', await cardEmpry.text());

  const paramsCart = new URLSearchParams();
  paramsCart.append('product_id', productId);
  paramsCart.append('quantity', '1');
  paramsCart.append('s_id', affraidId);
  paramsCart.append('byWeight', '0');

  const card = await fetch("https://belgorod.delivery-club.ru/ajax/cart/", {headers: { cookie, 'x-csrf-token': token },body: paramsCart, method:"POST", });
  console.log('card: ', await card.text());


  const date = new Date();
  date.setDate(new Date().getDate() + 2);
  const strDate = date.toISOString().substr(0, 10);

  const params = new URLSearchParams();
  params.append('user_type', 'RegisteredWithoutAddress');
  params.append('phone1', phone1);
  params.append('phone1_code', phone2);
  params.append('department_id', 'Выбрать ресторан');
  params.append('pickup_date', '0');
  params.append('pickup_time_h', '-1');
  params.append('pickup_time_m', '-1');
  params.append('person_count', '1');
  params.append('is_delivery_asap', '1');
  params.append('preorder_date', strDate);
  params.append('preorder_time_h', '19');
  params.append('preorder_time_m', '00');
  params.append('delivery_cost', '0');
  params.append('delivery_min_order', '390');
  params.append('ignore_warnings', '0');
  params.append('promo_discount', '0');
  params.append('promo_discount', '0');
  params.append('checkout_type', 'default');
  params.append('send', '1');
  params.append('checkout_locked', '0');
  params.append('affiliate_id', affraidId);
  params.append('delivery_24_hours', '0');
  params.append('delivery_time_preorder', '2');
  params.append('openhour_from', openhourFrom);
  params.append('openhour_to', openhourTo);
  params.append('online_payment', '1');
  params.append('promo_code', 'testtest');

  const promos = [
    "NY90DC417GO0HS",
    "NY90DCQH2Z871S",
    "NY90DCW5AS7OXY",
    "NYDC80LNQ1OWOM",
    "NYDC60TQU1YIP4",
    "NYDC6035OU2TV3",
    "NYDC603F0WDYGP",
    "NYDC50RZMKBE6K",
    "NYDC50SZ610DKT",
    "NYDC506ST6ERIU",
    "NYDC50WR89R0IT",
    "NYDC50CHRBG2ZW",
    "NYDC50MUL6LVI4",
    "NYDC507QL9E83S",
    "NYDC50IZY148N0",
    "NYDC500IFJDZHX",
    "NYDC40WNY3IVBC",
    "NYDC40P2KYM8HH",
    "NYDC40WF154X83",
    "NYDC40GQNQML2Q",
    "NYDC40JKPTFGF2",
    "NYDC40285ERKM7",
    "NYDC40OG14NR83",
    "NYDC408KCPDUVX",
    "NYDC40P3TW1UMQ",
    "NYDC407FB4BTPQ",
    "NYDC40WETGYWO9",
    "NYDC40D2A4D7OH",
    "NYDC406PWUQ1GU",
    "NYDC40PWANEQEH",
    "NYDC40YQWIW6LE",
    "NYDC40NKSKK3AY",
    "NYDC40AUXHU151",
    "NYDC40YBSHSQYM",
    "NYDC40WU33PVMX",
    "NYDC40TIYMBV1Q",
    "NYDC40EKMG7R79",
    "NYDC40EA2PS21B",
    "NYDC40Q7CPSSTG",
    "NYDC409MZQHA1W",
    "NYDC40WJNSWHUH",
    "NYDC40R36GUGRA",
    "NYDC40V51HVC0T",
    "NYDC400QGUBT8S",
    "NYDC40EDC4RGF2",
    "NYDC401ZCBO27K",
    "NYDC40LYGOTMHL",
    "NYDC40WPD2UB7R",
    "NYDC40M2I8XYMD",
    "NYDC409Y3CR29A",
    "NYDC401FNP61KZ",
    "NYDC35ZF9MPKEX",
    "NY35D90RYJ581",
    "NY35DKFTV5U42",
    "NY35D0BNF7YGY",
    "NY35DE35LZED1",
    "NY35D09KKK2W0",
    "NY35D4QKBI652",
    "NY35D3YNIIXI0",
    "NY35D6D18GHMZ",
    "NY35D7G2V2W8Y",
    "NY35DYTNN1JA2",
    "NY35DYX5JPT4Z",
    "NY35D76YD9A62",
    "NY35DES67VLL3",
    "NY35DIIAP9IOM",
    "NYDC35S2FE1EG9",
    "NY35DCNRN3DV1",
    "NY35DTJPR30L3",
    "NY35DC8W4Q0UV",
    "NY35DT6KWC5L3",
    "NYDC3549N99LVH",
    "NYDC3582VPA86M",
    "NYDC359R9ZZGKV",
    "NYDC358FF2IFA3",
    "NYDC35TCGCZIGI",
    "NYDC35NTBJUIIX",
    "NYDC35P3ELRXCC",
    "NYDC35JD12QG6G",
    "NYDC35Q3H19OAA",
    "NYDC35HWKVOTDJ",
    "NYDC350B5NUOP6",
    "NYDC35BPBKFF8Q",
    "NYDC3548TVDMBO",
    "NYDC3581YKT3WT",
    "NYDC35LIC91AT7",
    "NYDC35A51E7J30",
    "NYDC35D2KV7HTM",
    "NYDC35TC3FWID0",
    "NYDC35T17OQ29F",
    "NYDC35PNNWAL1N",
    "NYDC35RR0ANZCJ",
    "NYDC35A4N4RTSB",
    "NYDC353ML1ULTD",
    "NYDC351VD92P61",
    "NYDC35FZR5BMPA",
    "NYDC350ESO7YG3",
    "NYDC35AU5YG7JN",
    "NYDC35HZ2E4PJW",
    "NYDC35UIOF9IW6",
    "NYDC35YW78P8JQ",
    "NYDC35UHN13FWG",
    "NYDC35D19IMY6C",
    "NYDC35G3G9JJ0G",
    "NYDC35QE1R2U55",
    "NYDC354BHECFYD",
    "NYDC352UFA5LMY",
    "NYDC35EI1KCJON",
    "NYDC357W0WD3CW",
    "NYDC3546JWRG0H",
    "NYDC35BYTVQLHK",
    "NYDC359FPD0ZIE",
    "NYDC359QH6XZ6W",
    "NYDC35BL1XMP6Q",
    "NYDC358NVSIH63",
    "NY35DKV80N0S1",
    "NY35DWSCOZW2Z",
    "NY35DFNJQGW6Y",
    "NY35DWG3G3SLX",
    "NYDC35MX5U39NB",
    "NYDC359CZNXH7Q",
    "NY35DMZDWR2JX",
    "NY35DB0BCX7L3",
    "NY35DBE4AUTH4",
    "NY35DECMXJ4H4",
    "NY35DGLVX25NZ",
    "NYDC35WFRM0LZJ",
    "NY35DNDH4CN7W",
    "NY35DTWG9A4LX",
    "NY35DQXFULFL3",
    "NYDC35DM51ZMX3",
    "NYDC350NKISP46",
    "NYDC35YR0ZDYEO",
    "NYDC357CZIZSBF",
    "NYDC35AB7QFB7Y",
    "NYDC352HLL4CZ8",
    "NYDC353PN44158",
    "NYDC35MHAC4KV2",
    "NYDC35FAS84SLB",
    "NYDC35PFAZOOXA",
    "NYDC35FNVK0SO6",
    "NYDC35RRXYDG12",
    "NYDC359GLUOQ8S",
    "NYDC35WT0OVTH8",
    "NYDC35KJHSY0OS",
    "NYDC35NF9FJE6R",
    "NYDC35VS6446EA",
    "NYDC35HNR4H402",
    "NYDC35OUTM6L0V",
    "NYDC351OM683JO",
    "NYDC354MZLCJW7",
    "NYDC35W8Y98LIR",
    "NYDC35I7HP0Y0B",
    "NYDC35K4IS06NU",
    "NY35DZ5HOVL4Z",
    "NY35DDD8FDE4W",
    "HONOR2VARZJQM",
    "HONORO6EVKAHI",
    "HONOR8JK4BHHI",
    "HONORLD2EI4E5",
    "HONOR5JECB9FU",
    "HONOR23WV7RGU",
    "HONORGQUWJ8HU",
  ];


  for (let i = 0; i < promos.length; ++i) {
    let promo = promos[i];
    params.delete('promo_code');
    params.append('promo_code', promo);

    const res = await fetch("https://belgorod.delivery-club.ru/ajax/promocode", {headers:{ cookie },body: params, method:"POST", });

    console.log(promo, JSON.stringify(await res.json()));
    // await sleep(1000);

    let paramsDrop = new URLSearchParams();
    paramsDrop.append('affiliate_id', params.get('affiliate_id'));
    paramsDrop.append('delivery_cost', params.get('0'));
    const resDrop = await fetch("https://belgorod.delivery-club.ru/ajax/drop_promo", {headers:{ cookie },body: params, method:"POST"});
    console.log(JSON.stringify(await resDrop.text()));
    await sleep(1000);
  }


})();


export function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
