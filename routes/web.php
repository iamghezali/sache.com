<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('register');
})->name('register');

Route::get('/shop', function () {
    return Inertia::render('shop');
})->name('shop');

Route::get('/product', function () {
    return Inertia::render('product');
})->name('product');

Route::get('/shop/cart', function () {
    return Inertia::render('cart');
})->name('shop.cart');

Route::get('/shop/checkout', function () {
    return Inertia::render('checkout/checkout');
})->name('shop.checkout');

Route::get('/shop/checkout/success', function () {
    return Inertia::render('checkout/checkout-success');
})->name('shop.checkout.success');

