package ca.qc.cgmatane.devoirphonegaprattrapage;

import android.os.Bundle;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

public class ActivitePrincipale extends DroidGap {
    /** The view to show the ad. */


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");

    }
}