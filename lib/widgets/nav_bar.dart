import 'package:flutter/material.dart';

class NavBar extends StatelessWidget {
  const NavBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      color: Colors.blueGrey[100],
      child: const Column(
        children: [
          ListTile(title: Text('Home')),
          ListTile(title: Text('About')),
          ListTile(title: Text('Projects')),
        ],
      ),
    );
  }
}
