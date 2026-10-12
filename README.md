# WebTech_Project_Fall2026-27_GroupNumber-1-

pharmacy-management/
│

├── app/
│   ├── Controllers/
│   │   ├── AuthController.php
│   │   ├── DashboardController.php
│   │   ├── UserController.php
│   │   ├── MedicineController.php
│   │   ├── InventoryController.php
│   │   ├── SupplierController.php
│   │   ├── PurchaseController.php
│   │   ├── SalesController.php
│   │   ├── OrderController.php
│   │   ├── PaymentController.php
│   │   ├── ReturnController.php
│   │   └── ReportController.php
│   │
│   ├── Models/
│   │   ├── User.php
│   │   ├── Medicine.php
│   │   ├── MedicineBatch.php
│   │   ├── Category.php
│   │   ├── Supplier.php
│   │   ├── Purchase.php
│   │   ├── Sale.php
│   │   ├── CustomerOrder.php
│   │   ├── Payment.php
│   │   └── InventoryAdjustment.php
│   │
│   ├── Services/
│   │   ├── InventoryService.php
│   │   ├── PurchaseService.php
│   │   ├── SalesService.php
│   │   ├── OrderService.php
│   │   └── PaymentService.php
│   │
│   ├── Middleware/
│   │   ├── AuthMiddleware.php
│   │   ├── RoleMiddleware.php
│   │   └── CsrfMiddleware.php
│   │
│   ├── Views/
│   │   ├── layouts/
│   │   ├── auth/
│   │   ├── admin/
│   │   ├── staff/
│   │   ├── customer/
│   │   ├── medicines/
│   │   ├── inventory/
│   │   ├── purchases/
│   │   ├── sales/
│   │   ├── orders/
│   │   └── reports/
│   │
│   └── Helpers/
│       ├── auth.php
│       ├── validation.php
│       └── response.php
│
├── config/
│   ├── database.php
│   └── app.php
│
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── schema.sql
│
├── public/
│   ├── index.php
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── uploads/
│
├── routes/
│   └── web.php
│
├── storage/
│   ├── logs/
│   └── receipts/
│
├── tests/
├── .env
├── .gitignore
└── README.md
