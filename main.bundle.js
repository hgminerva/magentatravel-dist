webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_home__ = __webpack_require__("../../../../../src/app/app.component.home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component_p1__ = __webpack_require__("../../../../../src/app/app.component-p1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component_p2__ = __webpack_require__("../../../../../src/app/app.component-p2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component_p3__ = __webpack_require__("../../../../../src/app/app.component-p3.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'package1',
        component: __WEBPACK_IMPORTED_MODULE_3__app_component_p1__["a" /* AppComponentPackage1 */],
    },
    {
        path: 'package2',
        component: __WEBPACK_IMPORTED_MODULE_4__app_component_p2__["a" /* AppComponentPackage2 */],
    },
    {
        path: 'package3',
        component: __WEBPACK_IMPORTED_MODULE_5__app_component_p3__["a" /* AppComponentPackage3 */],
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_component_home__["a" /* AppComponentHome */],
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component-p1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentPackage1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponentPackage1 = (function () {
    function AppComponentPackage1() {
        this.title = 'package1';
    }
    AppComponentPackage1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.p1.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.p1.css")]
        })
    ], AppComponentPackage1);
    return AppComponentPackage1;
}());



/***/ }),

/***/ "../../../../../src/app/app.component-p2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentPackage2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponentPackage2 = (function () {
    function AppComponentPackage2() {
        this.title = 'package2';
    }
    AppComponentPackage2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.p2.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.p2.css")]
        })
    ], AppComponentPackage2);
    return AppComponentPackage2;
}());



/***/ }),

/***/ "../../../../../src/app/app.component-p3.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentPackage3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponentPackage3 = (function () {
    function AppComponentPackage3() {
        this.title = 'package3';
    }
    AppComponentPackage3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.p3.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.p3.css")]
        })
    ], AppComponentPackage3);
    return AppComponentPackage3;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.home.html":
/***/ (function(module, exports) {

module.exports = "\n      <!-- Header -->\n      <header class=\"header\" id=\"top\">\n        <div class=\"text-vertical-center\">\n          <h1><img class=\"img-portfolio img-fluid\" src=\"assets/img/magentatravel.png\"></h1>\n          <br>\n        </div>\n      </header>\n    \n      <!-- About -->\n      <section id=\"about\" class=\"about\">\n        <div class=\"container text-center\">\n          <h2>Magenta Travel</h2>\n          <p class=\"lead\">Start planning your dream vacation to Florida and the Bahamas on a <a href=\"https://www.carnival.com\">Carnival Cruise</a></p>\n        </div>\n        <!-- /.container -->\n      </section>\n    \n      <!-- Packages -->\n      <section id=\"packages\" class=\"packages bg-primary text-white\">\n        <div class=\"container\">\n          <div class=\"row text-center\">\n            <div class=\"col-lg-10 mx-auto\">\n              <h2>Our Packages</h2>\n              <hr class=\"small\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6\">\n                  <div class=\"package-item\">\n                    <p>\n                      7 Nights at Calypso Cay ($698)\n                    </p>\n                    <h4>\n                      <img class=\"img-portfolio img-fluid\" src=\"assets/img/package01.jpg\">\n                    </h4>\n                    <p>Calypso Cay Resort is located 7 miles away from Walt Disney World® Resort, and down the road from Universal Orlando®</p>\n                    <p>3 Day/2 night Carnival Cruise Freeport Bahamas/Port of Call Ft Lauderdale</p>\n                    <p>7 day Alamo Rental Car/ Economy Class. Does not include auto insurance</p>\n                    <a href=\"/package1\" class=\"btn btn-light\">Learn More</a>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6\">\n                  <div class=\"package-item\">\n                    <p>\n                      7 Nights at Inlet - New Smyrna ($798)\n                    </p>\n                    <h4>\n                      <img class=\"img-portfolio img-fluid\" src=\"assets/img/package02.jpg\">\n                    </h4>\n                    <p>Located in New Smyrna Beach, Florida is a luxurious ocean front condominium located on Central Florida’s east coast, 15 miles</p>\n                    <p>3 Day/2 night Carnival Cruise Freeport Bahamas/Port of Call Ft Lauderdale</p>\n                    <p>7 day Alamo Rental Car/ Economy Class. Does not include auto insurance</p>\n                    <a href=\"/package2\" class=\"btn btn-light\">Learn More</a>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6\">\n                  <div class=\"package-item\">\n                    <p>\n                      7 Nights at Saratoga Resort ($898)\n                    </p>\n                    <h4>\n                      <img class=\"img-portfolio img-fluid\" src=\"assets/img/package03.jpg\">\n                    </h4>\n                    <p>Spike up your getaway to the theme-park capital of the world with a tropical resort at the new Best Western</p>\n                    <p>3 Day/2 night Carnival Cruise Freeport Bahamas/Port of Call Ft Lauderdale</p>\n                    <p>7 day Alamo Rental Car/ Economy Class. Does not include auto insurance</p>\n                    <a href=\"/package3\" class=\"btn btn-light\">Learn More</a>\n                  </div>\n                </div>\n              </div>\n              <!-- /.row (nested) -->\n            </div>\n            <!-- /.col-lg-10 -->\n          </div>\n          <!-- /.row -->\n        </div>\n        <!-- /.container -->\n      </section>\n    \n      <!-- Callout \n      <aside class=\"callout\">\n        <div class=\"text-vertical-center\">\n          <h1>Vertically Centered Text</h1>\n        </div>\n      </aside>-->\n    \n      <!-- Terms -->\n      <section id=\"terms\" class=\"terms\">\n        <div class=\"container\">\n          <div class=\"row text-center\">\n            <div class=\"col-lg-10 mx-auto\">\n              <div class=\"panel-group\" id=\"accordion\">\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">\n                      Terms and Condition</a>\n                    </h4>\n                  </div>\n                  <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n                    <div class=\"panel-body\">\n                      <p style=\"font-size: 70%;\">\n                      1. Definitions<br><br>\n                      In these conditions of contract:<br><br> \n                      \"Magenta Travel\" means MagentaTravel.com, a business with principal office at: 2713 Heritage Lane Bradenton FL 34209 and/or its subsidiaries and/or its associated companies and/or its authorized agents appointed in writing by Magenta Travel.<br><br>\n                      \"Customer\" means any person, firm or company with whom Magenta Travel contracts for the provision of Arrangement Services by Magenta Travel or with whom Magenta Travel contracts, as agent for a Third Party Supplier for the provision of Travel Services.  References to “you”, “your” etc., are references to the Customer, authorized representatives of the Customer or those for whom travel is requested by the Customer.<br><br>\n                      \"Arrangement Services\" means Magenta Travel's services in recommending, booking and/or otherwise arranging, negotiating and reporting of the supply of Travel Services by Third Party Suppliers to the Customer.<br><br> \n                      \"Third Party Suppliers\" means any third parties who supply any Travel Services to the Customer. The identity of the relevant Third Party Supplier for a Travel Service will be communicated to the Customer by Magenta Travel.<br><br> \n                      “Travel Services” means travel by air, land or sea, accommodation, car rental, travel insurance or other related travel services.<br><br>\n                      2. General <br><br>\n                      a) These conditions shall be deemed to be incorporated into all contracts for Arrangement Services made by Magenta Travel with the Customer to the exclusion of all other terms and conditions and all work undertaken by Magenta Travel shall be deemed to be carried out on the terms of these conditions unless otherwise expressly agreed in writing by Magenta Travel.<br><br>\n                      b) Magenta Travel shall provide such Arrangement Services to the Customer and organize such Travel Services for the Customer as may be requested by the Customer and agreed by Magenta Travel from time to time. In the absence of any express written instructions to the contrary which are agreed by Magenta Travel, Magenta Travel may accept (and the Customer shall be bound by) any requests made by any employee, agent or other representative of the Customer.<br><br>\n                      c) When taking reservations for or otherwise arranging Travel Services Magenta Travel will be acting as a disclosed agent and the relevant Third Party Supplier will be responsible for providing the Travel Services to the Customer. Magenta Travel will not be responsible for any default or failure in any supply by any Third Party Supplier or for any loss, claim, cost, damage or injury incurred by the Customer (directly or indirectly) as a result of the acts or omissions of the Third Party Supplier. <br><br>\n                      d) By making a reservations, the Customer will be entering into a legally binding contract with the relevant Third Party Supplier in respect of the Travel Services to be provided by such Third Party Supplier. The contract for the Travel Services will be subject to the terms and conditions of that Third Party Supplier (copies of which are available to the Customer on request) and the Customer will be bound by such terms and conditions. It is the responsibility of the Customer to ensure that it and its Guest comply with such terms and conditions including those which relate to check-in times, luggage allowances etc.e) No Guest or any other third party will have any rights against Magenta Travel except as set forth.<br><br>\n                      3. Fees and Payment <br><br>\n                      a) The Customer shall pay to Magenta Travel on demand all costs, fees, taxes etc as invoiced by Magenta Travel to the Customer in respect of any Arrangement Services and any Travel Services in accordance with the payment terms set out in such invoice or otherwise agreed by Magenta Travel. <br><br>\n                      b) Magenta Travel reserves the right to request advance payment for Arrangement Services and/or Travel Services. <br><br>\n                      c) Travel Services which are not confirmed at the time of reservation may incur a higher fee than that given at the time of reservation. Until the reservation is confirmed and committed to by the Customer the price cannot be guaranteed and is subject to change.<br><br>\n                      d) Magenta Travel may charge a reservation fee or receive commission from reservation for Travel Services.<br><br>\n                      e) A convenience fee will be payable by the Customer at Magenta Travel’s standard rate for any costs incurred by Magenta Travel if payments are made by credit card.<br><br>\n                      4. Credit account facilities <br><br>\n                      a) If credit account facilities have been made available by Magenta Travel to the Customer then all sums due by the Customer to Magenta Travel shall be payable as set out in paragraph 4(c) below. Magenta Travel reserves the right to decline credit account facilities or to withdraw such facilities. Magenta Travel reserves the right to retain any funds due to the Customer such as refunds or credits to offset against any outstanding debt. Should no such credit account facilities be made available by Magenta Travel to the Customer or should these facilities be at any time withdrawn then Magenta Travel reserves the right to request an advance payment from the Customer in respect of all Travel Services and Arrangement Services. <br><br>\n                      b) Upon the withdrawal of credit account facilities all monies owing to Magenta Travel will become immediately payable.<br><br>\n                      c) Payment by the Customer of monies outstanding upon credit accounts is due as cleared funds within 7 days from the date of the invoices, excluding invoices for foreign currency or travelers checks which are due for payment by the Customer upon receipt of the invoice.<br><br> \n                      5. Payment for Travel Services by Magenta Travel <br><br>\n                      a) From time to time Magenta Travel may (at Magenta Travel’s discretion) make payment to a Third Party Supplier for Travel Services on behalf of a Customer using a Magenta Travel credit card or other payment method. Additional fees may be applied for such a service and the cost of reconciling any credit card. <br><br>\n                      b) Where payment for Travel Services is made using a Magenta Travel credit card or other payment method the Customer agrees to indemnify Magenta Travel from any misuse of the card or payment details by any current or past employee, consultant or agent of the Customer. <br><br>\n                      6. Reservation terms, amendments or cancellations <br><br>\n                      a) The Customer is responsible for the accuracy of all data supplied to Magenta Travel or any Third Party Suppliers including without limitation any information entered using the Online Reservation Services. In the event that such information is found to be incorrect additional costs may apply to correct such data. Details of such additional costs are available upon request.<br><br>\n                      b) Magenta Travel reserves the right to charge an administration fee of up to $300 per guest for amendments or cancellations of any reservations, including where no additional documentation is required. <br><br>\n                      c) The Customer acknowledges that the Travel Services may be subject to cancellation by the Third Party Supplier without prior notice. The Customer is responsible for checking and complying with the specific change or cancellation terms for the Customer’s bookings. <br><br>\n                      d) While Magenta Travel will make commercially reasonable efforts to assist those making or arranging reservations on behalf of the Customer in complying with the Customer’s travel policy, it is the responsibility of the Customer to ensure that all those making or arranging reservations on its behalf comply with its travel policy. Magenta Travel will not be held responsible for any reservations made outside of the Customer’s travel policy.<br><br>\n                      e) If the Customer requires a purchase order number or similar payment code to be provided when a reservation is made, it is the responsibility of the Customer to ensure that such number is provided and that is it accurate. The Customer shall be required to pay in full all invoices and charges for reservations which have been made even if a valid purchase order or similar payment code was not provided at the time of reservation.<br><br>\n                      7. Late Payments <br><br>\n                      In the event that any sums due by the Customer to Magenta Travel are not paid when due then, without prejudice to any other remedies of Magenta Travel, Magenta Travel may at any time: <br><br>\n                      a) Suspend all or part of the provision of the Arrangement Services to the Customer; and/or <br><br>\n                      b) Charge interest on all overdue sums at a rate of 1.5% per month until paid; and/or <br><br>\n                      c) Cancel (without any liability to the Customer or to any Passenger) any reservations for Travel Services made on behalf of the Customer in respect of which payment is outstanding, with any cancellation fees incurred as a result thereof being for the account of the Customer.<br><br>\n                      8. Liability<br><br>\n                      a) Subject to Clause 8(b), in the event of a claim by the Customer or by any Guest in respect of the supply of the Arrangement Services or any other liability whatsoever for which Magenta Travel is responsible in law, Magenta Travel's liability in any event shall not exceed the total amount paid or payable by the Customer to Magenta Travel by way of fees for the supply of the Arrangement Services concerned and the associated Travel Services. <br><br>\n                      b) Magenta Travel shall incur no liability whatsoever to the Customer or any Guest in respect of any indirect, special, consequential, punitive or other damages (howsoever incurred). <br><br>\n                      c) Magenta Travel shall not be liable to the Customer or any Guest for any default or failure in any supply by any Third Party Supplier or for any loss, claim, cost, damage or injury incurred by the Customer or any Guest (directly or indirectly) as a result of the acts or omissions of the Third Party Supplier.<br><br>\n                      9. Insurance<br><br>\n                      The Customer acknowledges and agrees that it is reasonable and prudent for the Customer (and/or any Guest) to put in place a policy of insurance in respect of any loss, claim, cost, damage or injury incurred in connection with the Travel Services or any travel resulting there from. Magenta Travel shall make commercially reasonable efforts to assist the Customer and/or the Passenger in obtaining such a policy of insurance from an insurer on the express request of the Customer and on payment of the appropriate premium. The Customer agrees to make each and every Guest aware of the provisions of this Clause 9.<br><br>\n                      10. Waiver No delay or failure to take action under these Standard Terms and Conditions shall constitute any waiver by Magenta Travel of any provision of these Standard Terms and Conditions.<br><br> \n                      11. Variation Magenta Travel reserves the right to review and adjust all elements of fees without prior notice to take account of (but not limited to) inflation, increased charges, costs, or changes to terms and conditions by Third Party Suppliers or other parties that may impact on us.<br><br>\n                      12. Jurisdiction and Governing Law These terms and conditions, any supply of the Arrangement Services to the Customer and/or the Guest and any contracts between Magenta Travel and the Customer shall be governed by the laws of Florida and shall be subject to the jurisdiction of the state courts and federal district courts within the State of Florida, without prejudice to the right of Magenta Travel to seek recovery of any sums due from the Customer before any court of competent jurisdiction.<br><br>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">\n                      Refund Policy</a>\n                    </h4>\n                  </div>\n                  <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                      <p style=\"font-size: 70%;\">\n                      1. Refunds <br><br>\n                      a) Credits or refunds (if any) for Travel Services not used may only be issued upon the return of all the relevant documentation relating to the Travel Service concerned and are subject to the terms and conditions of the relevant Third Party Supplier. <br><br>\n                      b) In the event that any cancellation or refund requires the consent of or calculation by the relevant Third Party Supplier then the invoice issued shall remain due and payable in terms of Clause 3 above and any sum refunded by the Third Party Supplier shall only be credited to the Customer's account on receipt of same by Magenta Travel from the Third Party Supplier. <br><br>\n                      c) All relevant documents required for a refund must be sent to Magenta Travel by registered mail. It is the responsibility of the Customer to ensure that the documents are received by Magenta Travel. <br><br>\n                      d) Without prejudice to the generality of Clauses 1(a) and 1(b) above, the Customer acknowledges and agrees that:<br><br>\n                      i) Any credits or refunds in respect of rail travel services can only be issued provided the relevant documentation is returned within one month of date of the issue of the said documentation (or on any other terms of the relevant Third Party Supplier relating to the ticket issued); and<br>\n                      ii) Not all tickets may be refunded or altered and that any refunds made may be liable to additional fees, which Magenta Travel and/or the Third Party Supplier may from time to time levy.<br><br>\n                      e) If the Customer is unsure as to the cancellation and/or refund provisions of any particular ticket or the charges levied then clarification should be sought at the time of booking.<br><br> \n                      </p>    \n                    </div>\n                  </div>\n                </div>\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\n                      Privacy Policy</a>\n                    </h4>\n                  </div>\n                  <div id=\"collapse3\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                      <p style=\"font-size: 70%;\">\n                      1. Data Protection <br><br>\n                      a) In providing Arrangement Services to the Customer, Magenta Travel may collect and process personal data (including names, contact details, passport numbers, credit card details, travel preferences and dietary requirements) relating to the Customer and/or the person for whom the Customer is making travel arrangements in order to make reservations for Travel Services with Third Party Suppliers. <br><br>\n                      b) The Customer acknowledges that in order to make a booking with Third Party Suppliers, Magenta Travel may transfer to, and store personal data both inside and outside the USA and the European Economic Area, and the Customer consents to Magenta Travel transferring and storing personal data in this way.<br><br>\n                      c) A copy of the personal data which Magenta Travel holds about the Customer and any Passengers for whom the Customer is making travel arrangements can be requested by the Customer or the Guest (as applicable) at any time.<br><br>\n                      d) The Customer acknowledges that Magenta Travel may transfer the Customer’s data (including personal data) to Third Party Suppliers and that any use of such data by the Third Party Suppliers will be in accordance with their terms and conditions and outside of Magenta Travel’s control.<br><br>\n                      2. Confidentiality <br><br>\n                      a) Each party undertakes to the other to keep confidential all information (written, oral, or in electronic form) concerning the business, business systems, methodologies, and affairs of the other that it shall have obtained or received as a result of the provision of Arrangement Services or Travel Services (“Confidential Information”).<br><br>\n                      b) Notwithstanding the above, the parties may disclose Confidential Information to: <br><br>\n                      i) their parent company or subsidiary and their officers, directors, employees and professional advisers (including auditors), <br>\n                      ii) where requested or required by any court of competent jurisdiction or any competent judicial, governmental, supervisory or regulatory body or iii) with the prior written consent of the other party. <br><br>\n                      c) For the avoidance of doubt, Confidential Information excludes information that: <br><br>\n                      i) is or becomes public knowledge other than as a direct or indirect result of any breach of this clause 15 or <br>\n                      ii) is known by a party before the date the information is disclosed by the other party or is lawfully obtained by a party after that date.<br><br>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- /.col-lg-10 -->\n          </div>\n          <!-- /.row -->\n        </div>\n        <!-- /.container -->\n      </section>\n    \n      <!-- Map -->\n      <section id=\"contact\" class=\"map\">\n        <iframe width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.760337581936!2d-82.62470134956354!3d27.47671968280397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c316ebf753f80b%3A0xfbbe68320c32c3cd!2s2713+Heritage+Ln%2C+Bradenton%2C+FL+34209%2C+USA!5e0!3m2!1sen!2sph!4v1509942727948\"></iframe>\n        <br/>\n        <small>\n          <a href=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.760337581936!2d-82.62470134956354!3d27.47671968280397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c316ebf753f80b%3A0xfbbe68320c32c3cd!2s2713+Heritage+Ln%2C+Bradenton%2C+FL+34209%2C+USA!5e0!3m2!1sen!2sph!4v1509942727948\"></a>\n        </small>\n      </section>\n    \n      <!-- Footer -->\n      <footer>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-10 mx-auto text-center\">\n              <h4>\n                <strong>Magentatravel.us</strong>\n              </h4>\n              <p>2713 Heritage Lane \n                <br>Bradenton FL 34209</p>\n              <ul class=\"list-unstyled\">\n                <li>\n                  <i class=\"fa fa-phone fa-fw\"></i>\n                  941 201 7680</li>\n                <li>\n                  <i class=\"fa fa-envelope-o fa-fw\"></i>\n                  <a href=\"mailto:sales@magentatravel.us\">sales@magentatravel.us</a>\n                </li>\n              </ul>\n              <br>\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fa fa-facebook fa-fw fa-3x\"></i>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fa fa-twitter fa-fw fa-3x\"></i>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a href=\"#\">\n                    <i class=\"fa fa-instagram fa-fw fa-3x\"></i>\n                  </a>\n                </li>\n              </ul>\n              <hr class=\"small\">\n              <p class=\"text-muted\">Copyright &copy; Magentatravel.us 2017</p>\n            </div>\n          </div>\n        </div>\n        <a id=\"to-top\" href=\"#top\" class=\"btn btn-dark btn-lg js-scroll-trigger\">\n          <i class=\"fa fa-chevron-up fa-fw fa-1x\"></i>\n        </a>\n      </footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponentHome = (function () {
    function AppComponentHome() {
        this.title = 'home';
    }
    AppComponentHome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.home.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.home.css")]
        })
    ], AppComponentHome);
    return AppComponentHome;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.p1.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.p1.html":
/***/ (function(module, exports) {

module.exports = "Package1 - Payment processing still on going.  Come back next time. <a href=\"/\">Back</a>"

/***/ }),

/***/ "../../../../../src/app/app.component.p2.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.p2.html":
/***/ (function(module, exports) {

module.exports = "Package2 - Payment processing still on going.  Come back next time. <a href=\"/\">Back</a>"

/***/ }),

/***/ "../../../../../src/app/app.component.p3.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.p3.html":
/***/ (function(module, exports) {

module.exports = "Package3 - Payment processing still on going.  Come back next time. <a href=\"/\">Back</a>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component_home__ = __webpack_require__("../../../../../src/app/app.component.home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component_p1__ = __webpack_require__("../../../../../src/app/app.component-p1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component_p2__ = __webpack_require__("../../../../../src/app/app.component-p2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component_p3__ = __webpack_require__("../../../../../src/app/app.component-p3.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__app_component_home__["a" /* AppComponentHome */], __WEBPACK_IMPORTED_MODULE_7__app_component_p1__["a" /* AppComponentPackage1 */], __WEBPACK_IMPORTED_MODULE_8__app_component_p2__["a" /* AppComponentPackage2 */], __WEBPACK_IMPORTED_MODULE_9__app_component_p3__["a" /* AppComponentPackage3 */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map