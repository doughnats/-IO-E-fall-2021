//Ultrasoniuc distance sensor referenced from https://create.arduino.cc/projecthub/abdularbi17/ultrasonic-sensor-hc-sr04-with-arduino-tutorial-327ff6
//RGB LED referenced from https://howtomechatronics.com/tutorials/arduino/how-to-use-a-rgb-led-with-arduino/

#include "Arduino_SensorKit.h"

#define trigPin 9
#define echoPin 10
#define ledPin 11

#define buzzerPin 5

#define redPin 2
#define greenPin 3
#define bluePin 4

long duration;
int distance;

bool alertSound = false;
int buzzerCounter = 0;

unsigned long currentTime;
long previousTime = 0; 

void setup() {
pinMode(trigPin, OUTPUT); 
pinMode(echoPin, INPUT);

pinMode(ledPin, OUTPUT);
pinMode(buzzerPin, OUTPUT);

pinMode(redPin, OUTPUT);
pinMode(greenPin, OUTPUT);
pinMode(bluePin, OUTPUT);
  
Serial.begin(9600);
}


void loop() {
digitalWrite(trigPin, LOW);
delayMicroseconds(2);

// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);

// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin, HIGH);

// Calculating the distance
distance = duration*0.034/2;

currentTime = millis();

Serial.print("Time: ");
Serial.println(currentTime);

////trackDistance();
alertMovement();

}

void trackDistance() {
//  Prints the distance on the Serial Monitor
Serial.print("Distance: ");
Serial.println(distance);
Serial.println(" cm");
}

void alertMovement() {
  if (distance < 100) {
    previousTime = currentTime;
    //digitalWrite(ledPin, HIGH);
    setColor(0, 255, 0); // Green Color
    alertSound = true;
    buzzerCounter++;

    
  } else {
    if(currentTime - previousTime >= 3000) {
    //digitalWrite(ledPin, LOW);
    setColor(0, 0, 0); // turn off color
    buzzerCounter = 0;
    }
    
//    if (currentTime - previousTime >= 500) {
//      noTone(buzzerPin);
//    }
  }

  if (alertSound && buzzerCounter > 0 && buzzerCounter < 2) {
    alertSound = false;
    tone(buzzerPin, 523);
    delay(500);
  } else {
    noTone(buzzerPin);
  }
}

void setColor(int redValue, int greenValue, int blueValue) {
  analogWrite(redPin, redValue);
  analogWrite(greenPin, greenValue);
  analogWrite(bluePin, blueValue);
}
