const keyTerms = [
  {
    title: "Purchase Price",
    offerA: "412k",
    offerB: "93k",
    offerC: "13k",
  },
  {
    title: "Seller Agent Commission",
    offerA: "412k",
    offerB: "43k",
    offerC: "13k",
  },
  {
    title: "Buyer Agent Commission",
    offerA: "412k",
    offerB: "93k",
    offerC: "13k",
  },
  {
    title: "Days to Close",
    offerA: "412k",
    offerB: "93k",
    offerC: "13k",
  },
];
const financeTerms = [
  {
    title: "Partial Seller Carry",
    offerA: true,
    offerB: true,
    offerC: false,
  },
  {
    title: "Bank Financed Buyer Loan",
    offerA: false,
    offerB: true,
    offerC: false,
  },
  {
    title: "Subject to Existing Loans",
    offerA: true,
    offerB: false,
    offerC: false,
  },
  {
    title: "Cash",
    offerA: false,
    offerB: false,
    offerC: true,
  },
];
const contingencies = [
  {
    title: "Sale of Current Home",
    offerA: false,
    offerB: false,
    offerC: false,
  },
  {
    title: "Buyer Loan Approval",
    offerA: false,
    offerB: true,
    offerC: false,
  },
  {
    title: "Formal Appraisal",
    offerA: false,
    offerB: true,
    offerC: false,
  },
  {
    title: "Inspection",
    offerA: true,
    offerB: true,
    offerC: true,
  },
  {
    title: "Title Report",
    offerA: true,
    offerB: true,
    offerC: true,
  },
  {
    title: "Home Insurance",
    offerA: true,
    offerB: true,
    offerC: true,
  },
];
const sellerCarry = [
  {
    title: "Down Pmt",
    offerA: "371M",
    offerB: "432M",
  },
  {
    title: "Purchase Price",
    offerA: "300K",
    offerB: "400K",
  },
  {
    title: "Monthly Pmt",
    offerA: "2158",
    offerB: "2245",
  },
  {
    title: "Balloon Pmt",
    offerA: "50",
    offerB: "60",
  },
  {
    title: "Loan Amt",
    offerA: "372M",
    offerB: "360M",
  },
  {
    title: "Loan APR",
    offerA: "0.01%",
    offerB: "0.02%",
  },
  {
    title: "Loan Term",
    offerA: "12 yrs",
    offerB: "8 yrs",
  },
  {
    title: "Total No. of Pmt",
    offerA: "3 yrs",
    offerB: "5 yrs",
  },
  {
    title: "Broker/ Agents Commission",
    offerA: "294 yrs",
    offerB: "276 yrs",
  },
  {
    title: "Net Pmt. to Seller (At Close)",
    offerA: "250M",
    offerB: "450M",
  },
  {
    title: "Net Pmt. to Seller (Total)",
    offerA: "320M",
    offerB: "450M",
  },
];

export { keyTerms, financeTerms, contingencies , sellerCarry };
