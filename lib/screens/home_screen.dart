import 'package:flutter/material.dart';
import 'package:personal_web/widgets/drawer_menu.dart';
import 'package:personal_web/widgets/nav_bar.dart';
import 'package:personal_web/widgets/responsive_layout.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
      ),
      drawer: const DrawerMenu(),
      body: const ResponsiveLayout(
        mobile: Column(
          children: [
            Text('Welcome to my website!'),
            // Add mobile-specific widgets here
          ],
        ),
        tablet: Column(
          children: [
            Text('Welcome to my website! - Tablet View'),
            // Add tablet-specific widgets here
          ],
        ),
        desktop: Row(
          children: [
            NavBar(),
            Expanded(child: Center(child: Text('Welcome to my website!'))),
            // Add desktop-specific widgets here
          ],
        ),
      ),
    );
  }
}
