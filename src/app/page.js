

const page = () => {
  return (
    <div>
      <section className="p-6 bg-gray-100 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Git Commands</h2>
        <ul className="space-y-3">

          <p>     git init  - Initialize a new Git repositoryyyy    </p>

          <p>     git add         </p>

          <p>     git commit -m "first commit"            </p>

          <p>     git remote add .............           </p>

          <p>     git push -u origin main                </p>

          <p>     git remote -v    =>check origin / which repository   </p>


          {/* git branching */}

          <p>     git branch    =>check branch           </p>

          <p>     git branch new-experimental     =>create new branch   </p>

          <p>     git checkout new-experimental     =>switching into new-experimental branch    </p>

          <p>     git branch -d new-experimental     =>delete new-experimental branch     </p>

          <p>     git checkout -b new-experimental   =>create new branch and switch into new-experimental branch </p>

          <p>     git push origin new-experimental     =>pushing code in  new-experimental origin   </p>


          {/* open source contribution */}

          <p>     git fork then git clone   </p>

          <p>     git commit -am "added-table"     =>then git clone   </p>

        </ul>
      </section>
    </div>
  );
};

export default page;