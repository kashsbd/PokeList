package com.pokelist;

import android.annotation.SuppressLint;
import android.database.Cursor;
import android.provider.ContactsContract;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

public class ContactsModule extends ReactContextBaseJavaModule {

    ContactsModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "ContactsModule";
    }

    @ReactMethod
    @SuppressLint("Range")
    public void getContacts(Promise promise) {
        try {
            WritableArray contactList = Arguments.createArray();
            Cursor cursor = getReactApplicationContext().getContentResolver().query(
                    ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                    null, null, null, null);

            while (cursor.moveToNext()) {
                WritableMap contact = Arguments.createMap();
                contact.putString("name", cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME)));
                contact.putString("number", cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER)));
                contactList.pushMap(contact);
            }
            cursor.close();
            Log.d("ContactsModule", contactList.toString());
            promise.resolve(contactList);
        } catch (Exception e) {
            promise.reject("Error", "Failed to load contacts", e);
        }
    }
}
