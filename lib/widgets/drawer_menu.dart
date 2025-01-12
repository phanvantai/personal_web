import 'package:flutter/material.dart';

class DrawerMenu extends StatelessWidget {
  const DrawerMenu({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: const [
          DrawerHeader(child: Text('Menu')),
          ListTile(title: Text('Home')),
          ListTile(title: Text('About')),
          ListTile(title: Text('Projects')),
        ],
      ),
    );
  }
}
