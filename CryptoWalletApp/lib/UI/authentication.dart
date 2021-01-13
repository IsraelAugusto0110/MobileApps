import 'home_view.dart';
import 'package:crypto_wallet_app/net/flutterfire.dart';
import 'package:flutter/material.dart';

class Authentication extends StatefulWidget {
  Authentication({Key key}) : super(key: key);

  @override
  _AuthenticationState createState() => _AuthenticationState();
}

class _AuthenticationState extends State<Authentication> {
  TextEditingController _emailField = TextEditingController();
  TextEditingController _passwordField = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
          color: Colors.blueGrey,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Container(
              margin: EdgeInsets.all(15.0),
              child: TextFormField(
              style: TextStyle(color: Colors.white),
              controller: _emailField,
              decoration: InputDecoration(
                hintText: "seuemail@email.com",
                hintStyle: TextStyle(color: Colors.white),
                labelText: "E-mail",
                labelStyle: TextStyle(color: Colors.white),
              ),
            ),

            ),
            Container(
              margin: EdgeInsets.all(15.0),
              child: TextFormField(
              style: TextStyle(color: Colors.white),
              controller: _passwordField,
              obscureText: true,
              decoration: InputDecoration(
                hintText: "sua senha",
                hintStyle: TextStyle(color: Colors.white),
                labelText: "Senha",
                labelStyle: TextStyle(color: Colors.white),
              ),
            ),
            ),
            
            Container(
              margin: EdgeInsets.all(15.0),
              width: MediaQuery.of(context).size.width / 1.4,
              height: 40,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(15.0),
                color: Colors.white,
              ),
              child: MaterialButton(
                onPressed: () async {
                  bool shouldNavigate =
                      await signUp(_emailField.text, _passwordField.text);
                  if (shouldNavigate) {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => HomeView()));
                  }
                },
                child: Text("Registrar"),
              ),
            ),
            Container(
              width: MediaQuery.of(context).size.width / 1.4,
              height: 40,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(15.0),
                color: Colors.white,
              ),
              child: MaterialButton(
                onPressed: () async {
                  bool shouldNavigate =
                      await signIn(_emailField.text, _passwordField.text);
                  if (shouldNavigate) {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => HomeView()));
                  }
                },
                child: Text("Entrar"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
