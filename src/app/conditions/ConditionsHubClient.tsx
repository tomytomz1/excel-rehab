"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  CONDITIONS,
  CONDITION_CATEGORIES,
  type ConditionCategory,
} from "@/lib/data/conditions";
import { cn } from "@/lib/utils";

const ALL_CATEGORY = "All" as const;
type FilterCategory = ConditionCategory | typeof ALL_CATEGORY;

/** [PLACEHOLDER] one-line description for condition cards */
const PLACEHOLDER_DESC =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. [PLACEHOLDER]";

export function ConditionsHubClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<FilterCategory>(ALL_CATEGORY);

  const filtered = useMemo(() => {
    let list = CONDITIONS;
    if (category !== ALL_CATEGORY) {
      list = list.filter((c) => c.category === category);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    return list;
  }, [search, category]);

  const byCategory = useMemo(() => {
    const map = new Map<ConditionCategory, typeof CONDITIONS>();
    for (const c of filtered) {
      const arr = map.get(c.category) ?? [];
      arr.push(c);
      map.set(c.category, arr);
    }
    return map;
  }, [filtered]);

  const categoriesToShow =
    category === ALL_CATEGORY
      ? CONDITION_CATEGORIES
      : ([category] as ConditionCategory[]);

  return (
    <SectionWrapper amount={0} className="py-10 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-4">
          <input
            type="search"
            placeholder="Search conditions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={cn(
              "w-full max-w-md h-12 min-h-12 rounded-lg border border-neutral-300 px-4 py-2.5 text-base text-neutral-900",
              "placeholder:text-neutral-500 outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:border-transparent"
            )}
            aria-label="Search conditions by name"
          />
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory(ALL_CATEGORY)}
              className={cn(
                "rounded-full min-h-[44px] px-4 py-2.5 text-base font-medium transition-colors outline-none",
                "focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                category === ALL_CATEGORY
                  ? "bg-brand-blue text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              )}
            >
              All
            </button>
            {CONDITION_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full min-h-[44px] px-4 py-2.5 text-base font-medium transition-colors outline-none",
                  "focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
                  category === cat
                    ? "bg-brand-blue text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-base text-neutral-600 leading-relaxed">No conditions match your search.</p>
        ) : (
          <div className="space-y-10">
            {categoriesToShow.map((cat) => {
              const items = byCategory.get(cat);
              if (!items?.length) return null;
              return (
                <div key={cat}>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4 leading-tight">
                    {cat}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((condition) => (
                      <Link
                        key={condition.slug}
                        href={`/conditions/${condition.slug}`}
                        className={cn(
                          "block p-4 rounded-xl bg-neutral-100/50 border border-neutral-200/80",
                          "hover:border-brand-green hover:shadow-md transition-all duration-200",
                          "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                        )}
                      >
                        <h3 className="text-xl font-semibold text-neutral-900 mb-1 group-hover:text-brand-blue leading-tight">
                          {condition.name}
                        </h3>
                        <p className="text-base text-neutral-600 line-clamp-2 mb-2 leading-relaxed">
                          {PLACEHOLDER_DESC}
                        </p>
                        <span className="inline-flex items-center gap-1 text-brand-blue font-semibold text-base">
                          Learn More
                          <span aria-hidden>→</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
