import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <h1 className={styles.text}>Home Page placeholder text</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elit
            dolor, mattis eget aliquet nec, porta non neque. Proin sagittis vel
            erat et feugiat. Ut in diam eget mauris dapibus porttitor. Nullam
            convallis vehicula bibendum. Integer sagittis purus eros. Aliquam
            cursus est velit, et egestas sem tempor ut. Curabitur ultrices
            lectus nulla, in euismod orci ultricies vehicula. Ut faucibus, erat
            ut tempus consectetur, purus mauris imperdiet sapien, eu auctor
            sapien eros id sapien. Phasellus eu orci eleifend, hendrerit ligula
            a, vestibulum dolor. Nullam dapibus pharetra dui, at tempus sapien
            euismod ac. Nam ac porttitor libero. Aliquam eget felis neque. Donec
            nulla odio, suscipit in posuere sit amet, viverra eu nulla. Vivamus
            gravida interdum elit.
          </p>
          <p className={styles.text}>
            Donec mollis tempus enim, vitae aliquam est sodales in. Mauris
            aliquet neque at dui sollicitudin, at vehicula mi imperdiet. Proin
            et justo lectus. Cras et viverra elit. Mauris gravida mattis velit
            ac maximus. Etiam laoreet tortor vitae sollicitudin sollicitudin.
            Donec sit amet lectus ut libero lacinia eleifend. Mauris erat risus,
            fringilla eget libero in, lobortis eleifend arcu. Nullam non neque
            et ligula finibus convallis maximus non ligula. Aenean venenatis
            molestie efficitur. Sed bibendum justo nec odio efficitur, eget
            feugiat leo sollicitudin. Proin lectus sem, volutpat sed purus eu,
            sagittis cursus nunc.
          </p>
          <p className={styles.text}>
            Pellentesque mattis neque quis sodales aliquam. Suspendisse nec
            lacus dui. Nulla rhoncus nisi sed tempor eleifend. Phasellus vel
            hendrerit nunc, eget viverra augue. In a accumsan diam, eget
            imperdiet arcu. Morbi dignissim ac purus eget sodales. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Duis gravida eros vitae tortor mattis blandit. Nunc
            dictum pulvinar sapien sed interdum. Duis quis tincidunt orci, eu
            dapibus urna. Sed mollis diam quis velit eleifend, sit amet laoreet
            dui vulputate. Donec vel orci sodales, aliquet quam sit amet,
            vulputate augue. Aenean sit amet odio mi. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Maecenas nisi diam, rutrum eget sapien aliquet, ultrices
            vehicula nisl.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
