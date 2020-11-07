package com.example.basiccrud;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClick(View view){
        EditText editName = findViewById(R.id.editName);
        EditText editEmail = findViewById(R.id.editEmail);

        TextView txtName = findViewById(R.id.txtName);
        TextView txtEmail = findViewById(R.id.txtEmail);

        txtName.setText(editName.getText().toString());
        txtEmail.setText(editEmail.getText().toString());
    }
}