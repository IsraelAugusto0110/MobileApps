package com.example.uibasics;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.SystemClock;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity{

    private ProgressBar pbDownload;
    private TextView txtDownload;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }

    public void onClick(View v) {
        txtDownload = findViewById(R.id.txtProgresso);
        pbDownload = findViewById(R.id.pbDownload);

        for (int i = 0; i < 10; i++){
            pbDownload.incrementProgressBy(10);
            txtDownload.setText(((i + 1) * 10)  + " %");
            SystemClock.sleep(500);
        }

    }
}