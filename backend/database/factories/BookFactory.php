<?php
use App\Models\Book;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(Book::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->randomElement(['Mastering Geography','Calculus Early Transcendentals','Control Systems Engineering','Fundamentals of Physics', 'MINDTAP IAC For Criminology', 'Artificial Intelligence', 'Cracking the Code', 'An Introduction to Statistical', 'Objects First with Java', 'Computer Networking', 'Computer Science Illuminated', 'Object-oriented Programming', 'Real-Time C++', 'Programming in Python 3', 'Algorithms in a Nutshell', 'Algorithms', 'Network Security']),
        'author' => "Dr."." ".$faker->firstName." ".$faker->lastName,
        'price' => $faker->randomNumber($nbDigits = 2, $strict = true),
        'quantity' => $faker->numberBetween($min = 1, $max = 3),
        'version' => $faker->year($max = 'now'),
        'description' => $faker->text,
        'sold' => $faker->boolean($chanceOfGettingTrue = 30),
    ];
});
