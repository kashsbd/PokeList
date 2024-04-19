package com.pokelist;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.telephony.SmsManager;

public class SmsModule extends ReactContextBaseJavaModule {

    SmsModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "SmsModule";
    }

    @ReactMethod
    public void sendSMS(String phoneNumber, String message, Promise promise) {
        try {
            SmsManager smsManager = SmsManager.getDefault();
            smsManager.sendTextMessage(phoneNumber, null, message, null, null);
            promise.resolve("SMS sent successfully!");
        } catch (Exception e) {
            promise.reject("Error", "Failed to send SMS", e);
        }
    }
}
